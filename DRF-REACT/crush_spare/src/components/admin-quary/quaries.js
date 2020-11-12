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
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1em",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  head_cell: {
    color: "#fff",
  },
  head: {
    backgroundColor: theme.palette.common.green,
  },
}));

const AllQuaries = (props) => {
  const { quaries } = props;
  const classes = useStyles();
  if (!quaries || quaries.length === 0)
    return <p>Can not find any posts, sorry</p>;
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell className={classes.head_cell} align="left">
                  ID
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Site
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Address
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  State
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Manager Name
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Manager Email
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Manager Phone
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Supervisor Name
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Supervisor Email
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Supervisor Phone
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quaries.map((spr) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {spr.id}
                    </TableCell>
                    <TableCell align="left">{spr.site}</TableCell>
                    <TableCell align="left">{spr.address}</TableCell>
                    <TableCell align="left">{spr.state}</TableCell>
                    <TableCell align="left">{spr.manager_name}</TableCell>
                    <TableCell align="left">{spr.manager_email}</TableCell>
                    <TableCell align="left">{spr.manager_phone}</TableCell>
                    <TableCell align="left">{spr.supervisor_name}</TableCell>
                    <TableCell align="left">{spr.supervisor_email}</TableCell>
                    <TableCell align="left">{spr.supervisor_phone}</TableCell>

                    <TableCell align="left">
                      <Link
                        color="textPrimary"
                        href={"/admin-quary/edit-quary/" + spr.id}
                        className={classes.link}
                      >
                        <EditIcon></EditIcon>
                      </Link>
                      <Link
                        color="textPrimary"
                        href={"/admin-quary/delete-quary/" + spr.id}
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
    </React.Fragment>
  );
};
export default AllQuaries;
