import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../assets/footer.png";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    borderTop: "1px  solid #eee",
    paddingTop: "3em",
    paddingBottom: "3em",
  },
  footer: {
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  Link: {
    color: "#bbb",
    fontFamily: "Raleway",
    fontSize: "1.3rem",
    fontWeight: 500,
    textDecoration: "none",
  },
  gridItem: {
    margin: "2em",
  },
  Linkdummy: {
    color: "#D2DADB",
  },
  icon: {
    height: "2em",
    width: "2em",
    padding: "1em",
    borderLeft: "1px  solid #eee",
    [theme.breakpoints.down("sm")]: {
      height: "2em",
      width: "2em",
    },
  },
  footerBottom: {
    backgroundColor: theme.palette.common.green,
  },
  socialContainer: {
    marginRight: "4em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-4em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-2.8em",
    },
  },
  build: {
    fontFamily: "Merriweather",
    fontWeight: 600,
    fontSize: "1.5rem",
    color: "#eee",
    marginLeft: "2em",
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="flex-start" className={classes.mainContainer}>
          <Grid container item>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={3}>
                <Grid
                  item
                  component={Link}
                  to="/"
                  onClick={() => props.setValue(0)}
                  className={classes.Link}
                >
                  Legal & Disclaimer
                </Grid>
              </Grid>
            </Grid>
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
                  Privacy Policy
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={3}>
                <Grid
                  item
                  component={Link}
                  to="/resources"
                  className={classes.Link}
                  onClick={() => props.setValue(2)}
                >
                  Terms & Conditions
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={3}>
                <Grid
                  item
                  component={Link}
                  to="/company"
                  onClick={() => props.setValue(2)}
                  className={classes.Link}
                >
                  News
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={3}>
                <Grid
                  item
                  component={Link}
                  to="/contact"
                  onClick={() => props.setValue(4)}
                  className={classes.Link}
                >
                  Search
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item className={classes.gridItem}>
            <span className={classes.Link}>
              © 2020 Boral. All rights reserved.
            </span>
          </Grid>
        </Grid>
      </Hidden>

      <Grid
        container
        className={classes.footerBottom}
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.build}>
            Build something great <sup style={{ fontSize: "0.4em" }}> TM</sup>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container item className={classes.socialContainer}>
            <Grid item component={"a"} href="https://www.facebook.com">
              <img
                alt="facebook logo"
                src={facebook}
                className={classes.icon}
              />
            </Grid>
            <Grid item component={"a"} href="https://www.twitter.com">
              <img alt="facebook logo" className={classes.icon} src={twitter} />{" "}
            </Grid>
            <Grid item component={"a"} href="https://www.instagram.com">
              <img
                alt="facebook logo"
                className={classes.icon}
                src={instagram}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
