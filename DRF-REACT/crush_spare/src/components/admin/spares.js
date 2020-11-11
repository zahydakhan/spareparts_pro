import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  postTitle: {
    fontSize: "16px",
    textAlign: "left",
  },
  postText: {
    display: "flex",
    justifyContent: "left",
    alignItems: "baseline",
    fontSize: "12px",
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
}));

const AllSpares = (props) => {
  const { spares } = props;
  const classes = useStyles();
  if (!spares || spares.length === 0)
    return <p>Can not find any posts, sorry</p>;
  return (
    <React.Fragment>
      <Container component="main">
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="left">Part Number</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Vendor Name</TableCell>
                  <TableCell align="left">Vendor Status</TableCell>
                  <TableCell align="left">Price AUD</TableCell>
                  <TableCell align="left">Price USD</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Weight (kg)</TableCell>
                  <TableCell align="left">Machine</TableCell>
                  <TableCell align="left">Model Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {spares.map((spr) => {
                  return (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {spr.id}
                      </TableCell>
                      <TableCell align="left">{spr.part_number}</TableCell>
                      <TableCell align="left">{spr.description}</TableCell>
                      <TableCell align="left">{spr.vendor_name}</TableCell>
                      <TableCell align="left">{spr.vendor_status}</TableCell>
                      <TableCell align="left">{spr.aud}</TableCell>
                      <TableCell align="left">{spr.usd}</TableCell>
                      <TableCell align="left">{spr.price}</TableCell>
                      <TableCell align="left">{spr.weight_kg}</TableCell>
                      <TableCell align="left">{spr.machine}</TableCell>
                      <TableCell align="left">{spr.model_number}</TableCell>

                      <TableCell align="left">
                        <Link
                          color="textPrimary"
                          href={"/admin/edit/" + spr.id}
                          className={classes.link}
                        >
                          <EditIcon></EditIcon>
                        </Link>
                        <Link
                          color="textPrimary"
                          href={"/admin/delete/" + spr.id}
                          className={classes.link}
                        >
                          <DeleteForeverIcon></DeleteForeverIcon>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell colSpan={4} align="right">
                    <Button
                      href={"/admin/create"}
                      variant="contained"
                      color="primary"
                    >
                      Add New Spare Part
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
};
export default AllSpares;
