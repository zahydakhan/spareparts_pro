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

const AllRollers = (props) => {
  const { rollers } = props;
  console.log(rollers);
  const classes = useStyles();
  if (!rollers || rollers.length === 0)
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
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Roller Diameter</TableCell>
                  <TableCell align="left">Wall Thickness</TableCell>
                  <TableCell align="left">Roller Length</TableCell>
                  <TableCell align="left">Shaft Diameter</TableCell>
                  <TableCell align="left">Bearing</TableCell>
                  <TableCell align="left">AUD</TableCell>
                  <TableCell align="left">USD</TableCell>
                  <TableCell align="left">Vendor Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rollers.map((spr) => {
                  return (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {spr.id}
                      </TableCell>
                      <TableCell align="left">{spr.description}</TableCell>
                      <TableCell align="left">{spr.roller_diameter}</TableCell>
                      <TableCell align="left">{spr.wall_thickness}</TableCell>
                      <TableCell align="left">{spr.roller_length}</TableCell>
                      <TableCell align="left">{spr.shaft_diameter}</TableCell>
                      <TableCell align="left">{spr.bearing}</TableCell>
                      <TableCell align="left">{spr.aud}</TableCell>
                      <TableCell align="left">{spr.usd}</TableCell>
                      <TableCell align="left">{spr.vendor_name}</TableCell>

                      <TableCell align="left">
                        <Link
                          color="textPrimary"
                          href={"/admin-roller/edit-roller/" + spr.id}
                          className={classes.link}
                        >
                          <EditIcon></EditIcon>
                        </Link>
                        <Link
                          color="textPrimary"
                          href={"/admin-roller/delete-roller/" + spr.id}
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
                      href={"/admin-roller/create-roller/"}
                      variant="contained"
                      color="primary"
                    >
                      Add New Roller
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
export default AllRollers;
