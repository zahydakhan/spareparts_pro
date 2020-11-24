import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const Users = (props) => {
  const { users } = props;
  const classes = useStyles();
  if (!users || users.length === 0) return <p>Can not find any posts, sorry</p>;
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
                  Email
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  User Name
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  First Name
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Start Date
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  About
                </TableCell>
                <TableCell className={classes.head_cell} align="left">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {user.id}
                    </TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="left">{user.user_name}</TableCell>
                    <TableCell align="left">{user.first_name}</TableCell>
                    <TableCell align="left">{user.start_date}</TableCell>
                    <TableCell align="left">{user.about}</TableCell>

                    <TableCell align="left">
                      <Link
                        color="textPrimary"
                        href={"/user/edit/" + user.id}
                        className={classes.link}
                      >
                        <EditIcon></EditIcon>
                      </Link>
                      <Link
                        color="textPrimary"
                        href={"/user/delete/" + user.id}
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
                    href={"/register"}
                    variant="contained"
                    color="primary"
                  >
                    Add New User
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
export default Users;
