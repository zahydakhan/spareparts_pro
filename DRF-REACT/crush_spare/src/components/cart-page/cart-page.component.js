import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import axiosInstance from "../../axios";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import logo from "../../assets/boral-logo.png";
import Delete from "@material-ui/icons/Delete";
import { useReactToPrint } from "react-to-print";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  deleteButton: {
    color: "#e63946",
  },
  tableContainer: {
    marginTop: "2em",
  },
  title: {
    fontSize: "2em",
  },
  formControl: {
    margin: theme.spacing(),
    minWidth: 120,
  },
  mainContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "6em",
  },
  root: {
    minWidth: 100,
    minHeight: 150,
    marginTop: "2em",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: "1.3em",
    color: theme.palette.common.green,
  },
  purchase: {
    ...theme.typography.h2,
    fontSize: "1.7em",
    marginRight: "0.3em",
  },
  logo: {
    margin: "0.5em",
    height: "5em",
    [theme.breakpoints.down("md")]: {
      height: "4em",
      margin: "0.2em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2.9em",
      margin: "0.1em",
    },
  },
  subHeading: {
    fontWeight: "bold",
    marginRight: "0.5em",
  },
  total: {
    ...theme.typography.h2,
    fontSize: "1em",
    marginTop: "1em",
    fontFamily: "Roboto",
  },
  totalCon: {
    border: "1px solid #e0e0e0",
    padding: "0.5em",
  },
  save: {
    marginRight: "1em",
    backgroundColor: theme.palette.common.yellow,
  },
  po_info: {
    fontSize: "1em",
  },
  table_head: {
    backgroundColor: theme.palette.common.green,
  },
  table_cell: {
    color: "#ffffff",
  },
}));

const BasicTable = React.forwardRef((props, ref) => {
  const cart = props.cart;
  const setCart = props.setCart;
  const classes = useStyles();
  const theme = useTheme();
  const [quaryInfo, setQuaryInfo] = useState([]);

  const [filteredQuary, setFilteredQuary] = useState({
    0: {
      id: 2,
      site: "Ormeau",
      address: "Dummy address",
      state: "ACT",
      manager_name: "Martyn Taylor",
      manager_email: "Martyn.Taylor@boral.com.au",
      manager_phone: "854422544",
      supervisor_name: "Laurie Billiau",
      supervisor_email: "Martyn.Taylor@boral.com.au",
      supervisor_phone: "78956412",
      created_at: "2020-11-08T17:50:00Z",
    },
  });
  const [audToUsd, setAudToUsd] = React.useState(0.0);

  useEffect(() => {
    axiosInstance.get("parts/quary/").then((res) => {
      console.log(res.data);
      setQuaryInfo(res.data);
    }, []);

    fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then((res) => res.json())
      .then((rec) => setAudToUsd(rec["rates"]["AUD"]));
  }, [props.inputSite, audToUsd]);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const handleChange = (event) => {
    const sitee = event.target.value;
    props.setInputSite(event.target.value);
    setFilteredQuary(quaryInfo.filter((site) => site.site == sitee));
  };

  console.log(filteredQuary);
  console.log(cart);

  return (
    <div ref={ref}>
      <Container
        container
        fixed
        //minWidth="md"
        component="main"
        className={classes.mainContainer}
      >
        <Grid container item>
          <Grid container item xs={6}>
            <Grid container alignItems="center">
              <Grid item>Site Name:</Grid>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.inputSite}
                    onChange={handleChange}
                  >
                    {quaryInfo.map((site) => (
                      <MenuItem key={site.id} value={site.site}>
                        {site.site}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={6} justify="flex-end" alignItems="center">
            <Grid item>
              <Typography className={classes.purchase}>
                <Grid container direction="column" alignItems="flex-end">
                  <Grid item>Purchase</Grid>
                  <Grid item>Order</Grid>
                </Grid>
              </Typography>
            </Grid>
            <Grid item>
              <img className={classes.logo} alt="Boral Logo" src={logo} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={6}>
              <Typography>
                <span className={classes.address}>Address </span>
                <br />
                {filteredQuary[0].address}
              </Typography>
            </Grid>

            <Grid
              sm={6}
              container
              item
              style={{ marginTop: "1em" }}
              alignItems="flex-end"
              direction="column"
            >
              <Typography className={classes.po_info}>
                PO Date: __________________
              </Typography>
              <Typography className={classes.po_info}>
                PO #: _____________________
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom>
                  <span className={classes.subTitle}>Manager Information </span>
                  <br />
                  <span className={classes.subHeading}>Name: </span>
                  {filteredQuary[0].manager_name}
                  <br />
                  <span className={classes.subHeading}>Email: </span>{" "}
                  {filteredQuary[0].manager_email}
                  <br />
                  <span className={classes.subHeading}>Phone: </span>{" "}
                  {filteredQuary[0].manager_phone}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom>
                  <span className={classes.subTitle}>
                    Supervisor Information
                  </span>
                  <br />
                  <span className={classes.subHeading}>Name:</span>{" "}
                  {filteredQuary[0].supervisor_name}
                  <br />
                  <span className={classes.subHeading}>Email: </span>{" "}
                  {filteredQuary[0].supervisor_email}
                  <br />
                  <span className={classes.subHeading}>Phone: </span>{" "}
                  {filteredQuary[0].supervisor_phone}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {cart.length ? (
          <Grid>
            <Grid
              container
              justify="center"
              direction="column"
              className={classes.tableContainer}
            >
              <Grid item>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.table_head}>
                      <TableRow>
                        <TableCell
                          className={classes.table_cell}
                          align="center"
                        >
                          Part Number
                        </TableCell>
                        <TableCell
                          align="center"
                          className={classes.table_cell}
                        >
                          Description
                        </TableCell>
                        <TableCell
                          align="center"
                          className={classes.table_cell}
                        >
                          Vendor Name
                        </TableCell>
                        <TableCell
                          align="center"
                          className={classes.table_cell}
                        >
                          Unit Price
                        </TableCell>
                        <TableCell
                          align="center"
                          className={classes.table_cell}
                        >
                          Quantity
                        </TableCell>
                        <TableCell
                          align="center"
                          className={classes.table_cell}
                        >
                          Total
                        </TableCell>
                        <TableCell
                          align="center"
                          className={classes.table_cell}
                        >
                          Delete
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.length
                        ? cart.map((cartItem) => (
                            <TableRow key={cartItem.id}>
                              <TableCell align="center">
                                {cartItem.bearing
                                  ? cartItem.bearing
                                  : cartItem.part_number}
                              </TableCell>
                              <TableCell align="center">
                                {cartItem.bearing
                                  ? `${cartItem.description} - ${cartItem.roller_diameter} x ${cartItem.wall_thickness} x ${cartItem.roller_length}`
                                  : cartItem.description}
                              </TableCell>
                              <TableCell align="center">
                                {cartItem.vendor_name}
                              </TableCell>
                              <TableCell align="center">
                                $
                                {cartItem.aud
                                  ? cartItem.aud
                                  : (
                                      parseFloat(cartItem.usd) *
                                      parseFloat(audToUsd)
                                    ).toFixed(2)}
                              </TableCell>
                              <TableCell align="center">
                                {cartItem.quantity}
                              </TableCell>
                              <TableCell align="center">
                                $
                                {cartItem.aud
                                  ? (cartItem.aud * cartItem.quantity).toFixed(
                                      2
                                    )
                                  : (
                                      parseFloat(cartItem.usd) *
                                      parseFloat(audToUsd) *
                                      cartItem.quantity
                                    ).toFixed(2)}
                              </TableCell>
                              <TableCell align="center">
                                <Delete
                                  className={classes.deleteButton}
                                  onClick={() => removeFromCart(cartItem)}
                                ></Delete>
                              </TableCell>
                            </TableRow>
                          ))
                        : "No order added"}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>

            <Grid container>
              <Grid container item alignItems="flex-end" direction="column">
                <Grid
                  item
                  className={classes.totalCon}
                  style={{ margin: "1em 0 0.5em 0" }}
                >
                  <Typography className={classes.total}>
                    <span style={{ marginRight: "1em" }}>Total Quantity:</span>
                    {cart.reduce(
                      (acc, curr) =>
                        parseFloat(acc) + parseFloat(curr.quantity),
                      0
                    )}
                  </Typography>
                </Grid>

                <Grid item className={classes.totalCon}>
                  <Typography className={classes.total}>
                    <span style={{ marginRight: "1em" }}>Total Price:</span>
                    <span>
                      $
                      {cart
                        .reduce(
                          (acc, curr) =>
                            parseFloat(acc) +
                            parseFloat(curr.quantity) *
                              (curr.aud
                                ? parseFloat(curr.aud)
                                : parseFloat(curr.usd) * audToUsd),
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <div>No Order Added</div>
        )}
      </Container>
    </div>
  );
});

export default BasicTable;
