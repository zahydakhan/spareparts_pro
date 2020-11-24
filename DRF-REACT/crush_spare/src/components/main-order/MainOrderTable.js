import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table_head: {
    backgroundColor: theme.palette.common.green,
  },
  table_cell: {
    color: "#ffffff",
  },
  mainContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "1em",
    marginTop: "3em",
  },
}));

const BasicTable = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const mainOrder = props.mainOrder;

  return (
    <Container
      container
      className={classes.mainContainer}
      disableGutters
      maxWidth="auto"
    >
      {mainOrder.length ? (
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
                      <TableCell className={classes.table_cell} align="center">
                        Part Number
                      </TableCell>
                      <TableCell align="center" className={classes.table_cell}>
                        Description
                      </TableCell>
                      <TableCell align="center" className={classes.table_cell}>
                        Vendor Name
                      </TableCell>
                      <TableCell align="center" className={classes.table_cell}>
                        Unit Price
                      </TableCell>
                      <TableCell align="center" className={classes.table_cell}>
                        Quantity
                      </TableCell>
                      <TableCell align="center" className={classes.table_cell}>
                        Total Price
                      </TableCell>
                      <TableCell align="center" className={classes.table_cell}>
                        PR Number
                      </TableCell>
                      <TableCell align="center" className={classes.table_cell}>
                        Line Number
                      </TableCell>
                      <TableCell align="center" className={classes.table_cell}>
                        Site Name
                      </TableCell>
                      <TableCell align="center" className={classes.table_cell}>
                        Month
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {mainOrder.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell align="center">
                          {order.part_number}
                        </TableCell>
                        <TableCell align="center">
                          {order.description}
                        </TableCell>
                        <TableCell align="center">
                          {order.vendor_name}
                        </TableCell>
                        <TableCell align="center">{order.unit_price}</TableCell>
                        <TableCell align="center">{order.quantity}</TableCell>
                        <TableCell align="center">
                          {order.total_price}
                        </TableCell>
                        <TableCell align="center">{order.pr_number}</TableCell>
                        <TableCell align="center">
                          {order.line_number}
                        </TableCell>
                        <TableCell align="center">{order.site_name}</TableCell>
                        <TableCell align="center">{order.month}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <div>No Order Added</div>
      )}
    </Container>
  );
};

export default BasicTable;
