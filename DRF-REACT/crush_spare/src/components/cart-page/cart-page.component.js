import React, { useEffect, useState } from "react";
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
    margin: theme.spacing(1),
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
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: "1.3em",
  },
  purchase: {
    ...theme.typography.h2,
    fontSize: "2em",
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
    paddingRight: "6.5em",
    marginTop: "1em",
  },
  save: {
    marginRight: "1em",
    backgroundColor: theme.palette.common.yellow,
  },
}));

const BasicTable = React.forwardRef((props, ref) => {
  const cart = props.cart;
  const setCart = props.setCart;
  const classes = useStyles();
  const theme = useTheme();
  const [quaryInfo, setQuaryInfo] = useState([]);
  const [inputSite, setInputSite] = useState("Ormeau");
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

  useEffect(() => {
    axiosInstance.get("parts/quary/").then((res) => {
      console.log(res.data);
      setQuaryInfo(res.data);
    });
  }, [inputSite]);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const handleChange = (event) => {
    const sitee = event.target.value;
    setInputSite(event.target.value);
    setFilteredQuary(quaryInfo.filter((site) => site.site == sitee));
  };

  console.log(filteredQuary);

  return (
    <div ref={ref}>
      <Container
        container
        fixed
        //minWidth="md"
        component="main"
        className={classes.mainContainer}
      >
        <Grid container item justify="space-between">
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Select Site</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inputSite}
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
          <Grid item style={{ marginTop: "1em" }}>
            <Button variant="contained" className={classes.save}>
              Save Order
            </Button>
            <Button variant="contained" className={classes.pdf}>
              Print PDF
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <img className={classes.logo} alt="Boral Logo" src={logo} />
          </Grid>
          <Grid item xs={6} align="right">
            <Typography className={classes.purchase}>
              Purchase <br /> Order
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom>
                  <span className={classes.subTitle}>Address </span>
                  <br />
                  {filteredQuary[0].address}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom>
                  <span className={classes.subTitle}>Site Name </span>
                  <br />
                  {filteredQuary[0].site}
                  <br />
                  <span className={classes.subHeading}>Order Date:</span>
                  <span>{new Date().toISOString().slice(0, 10)}</span>
                  <br />
                  <span className={classes.subHeading}>Order Ref #: </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
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

        {cart !== [] ? (
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
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Part Number</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Vendor Name</TableCell>
                        <TableCell align="center">Unit Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Total</TableCell>
                        <TableCell align="center">Delete</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.length
                        ? cart.map((cartItem) => (
                            <TableRow key={cartItem.id}>
                              <TableCell align="center">
                                {cartItem.part_number}
                              </TableCell>
                              <TableCell align="center">
                                {cartItem.description}
                              </TableCell>
                              <TableCell align="center">
                                {cartItem.vendor_name}
                              </TableCell>
                              <TableCell align="center">
                                ${cartItem.aud}
                              </TableCell>
                              <TableCell align="center">
                                {cartItem.quantity}
                              </TableCell>
                              <TableCell align="center">
                                ${cartItem.quantity * cartItem.aud}
                              </TableCell>
                              <TableCell align="center">
                                <Delete
                                  className={classes.deleteButton}
                                  onClick={() => removeFromCart(cartItem)}
                                ></Delete>
                              </TableCell>
                            </TableRow>
                          ))
                        : 0}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>

            <Grid container>
              <Grid container item justify="flex-end">
                <Grid item>
                  <Typography className={classes.total}>
                    <span style={{ marginRight: "1em" }}>Total:</span>
                    {cart.reduce(
                      (acc, curr) =>
                        parseFloat(acc) + parseFloat(curr.quantity),
                      0
                    )}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.total}>
                    <span style={{ marginRight: "4em" }}>
                      $
                      {cart.reduce(
                        (acc, curr) =>
                          parseFloat(acc) +
                          parseFloat(curr.quantity) * parseFloat(curr.aud),
                        0
                      )}
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <div></div>
        )}
      </Container>
    </div>
  );
});

export default BasicTable;
