import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../assets/footer.png";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  Link: {
    color: "#2c2e2e",
    fontFamily: "Raleway",
    fontSize: "0.95rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "2em",
  },
  Linkdummy: {
    color: "#D2DADB",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("sm")]: {
      height: "2em",
      width: "2em",
    },
  },
  socialContainer: {
    backgroundColor: theme.palette.common.green,
    position: "absolute",
    right: "1.5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-4em",
      right: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-2.8em",
      right: "1.5em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="flex-end" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => props.setValue(0)}
                className={classes.Link}
              >
                Home{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Grid>{" "}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <Grid
                item
                component={Link}
                to="/solutions"
                className={classes.Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
              >
                Solutions{" "}
              </Grid>{" "}
              <Grid
                item
                component={Link}
                to="/spendanalytics"
                className={classes.Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Spend Analytics{" "}
              </Grid>{" "}
              <Grid
                item
                component={Link}
                to="/saving"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                className={classes.Link}
              >
                Saving Tracker{" "}
              </Grid>{" "}
              <Grid
                item
                component={Link}
                to="/analytics"
                className={classes.Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                Analytics As a Service{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Grid>{" "}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <Grid
                item
                component={Link}
                to="/resources"
                className={classes.Link}
                onClick={() => props.setValue(2)}
              >
                Resources
              </Grid>
              <Grid
                item
                component={Link}
                to="/"
                className={classes.Link}
                onClick={() => props.setValue(0)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => props.setValue(0)}
                className={classes.Link}
              >
                Technology{" "}
              </Grid>{" "}
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => props.setValue(0)}
                className={classes.Link}
              >
                Process{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Grid>{" "}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <Grid
                item
                component={Link}
                to="/company"
                onClick={() => props.setValue(2)}
                className={classes.Link}
              >
                Company{" "}
              </Grid>{" "}
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => props.setValue(0)}
                className={classes.Link}
              >
                About Us{" "}
              </Grid>{" "}
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => props.setValue(0)}
                className={classes.Link}
              >
                History{" "}
              </Grid>{" "}
              <Grid
                item
                component={Link}
                to="/"
                onClick={() => props.setValue(0)}
                className={classes.Link}
              >
                Team{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Grid>{" "}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={3}>
              <Grid
                item
                component={Link}
                to="/contact"
                onClick={() => props.setValue(4)}
                className={classes.Link}
              >
                Contact Us{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Hidden>{" "}
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid item component={"a"} href="https://www.facebook.com">
          <img alt="facebook logo" src={facebook} className={classes.icon} />{" "}
        </Grid>{" "}
        <Grid item component={"a"} href="https://www.twitter.com">
          <img alt="facebook logo" className={classes.icon} src={twitter} />{" "}
        </Grid>{" "}
        <Grid item component={"a"} href="https://www.instagram.com">
          <img alt="facebook logo" className={classes.icon} src={instagram} />{" "}
        </Grid>{" "}
      </Grid>{" "}
    </footer>
  );
}
