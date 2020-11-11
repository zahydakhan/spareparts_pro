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

const AllQuaries = (props) => {
  const { quaries } = props;
  console.log(quaries);
  const classes = useStyles();
  if (!quaries || quaries.length === 0)
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
                  <TableCell align="left">Site</TableCell>
                  <TableCell align="left">Address</TableCell>
                  <TableCell align="left">State</TableCell>
                  <TableCell align="left">Manager Name</TableCell>
                  <TableCell align="left">Manager Email</TableCell>
                  <TableCell align="left">Manager Phone</TableCell>
                  <TableCell align="left">Supervisor Name</TableCell>
                  <TableCell align="left">Supervisor Email</TableCell>
                  <TableCell align="left">Supervisor Phone</TableCell>
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
                      href={"/admin-quary/create-quary/"}
                      variant="contained"
                      color="primary"
                    >
                      Add Quary
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
export default AllQuaries;
