import React from "react";
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  deleteButton: {
    backgroundColor: "#e63946",
    color: "#FFFFFF",
  },
  tableContainer: {
    marginTop: "2em",
  },
  title: {
    fontSize: "2em",
  },
});

export default function BasicTable({ cart, setCart }) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(cart);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== product));
  };

  return (
    <Grid container justify="center" className={classes.tableContainer}>
      <Grid item>
        <Typography className={classes.title} variant="h2">
          Check Out
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Part Number</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Vendor Name</TableCell>
                <TableCell align="center">Price AUD</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((cartItem) => (
                <TableRow key={cartItem.id}>
                  <TableCell align="center">{cartItem.part_number}</TableCell>
                  <TableCell align="center">{cartItem.description}</TableCell>
                  <TableCell align="center">{cartItem.vendor_name}</TableCell>
                  <TableCell align="center">{cartItem.aud}</TableCell>
                  <TableCell align="center">{cartItem.quantity}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      className={classes.deleteButton}
                      onClick={() => removeFromCart(cartItem)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
