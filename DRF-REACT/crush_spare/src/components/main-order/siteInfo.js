import React, { useEffect, useState } from "react";
import MainOrderTable from "./MainOrderTable";
import SparepartsLoadingComponent from "../ui/SparepartsLoading";
import axiosInstance from "../../axios";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import logo from "../../assets/boral-logo.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginLeft: "0em",
    marginRight: "0em",
    paddingLeft: "4em",
    paddingRight: "4em",
    marginBottom: "6em",
    marginTop: "2em",
  },
  search: {
    height: "3em",
    fontSize: "1.2em",
    paddingLeft: "2em",
  },
  title: {
    fontFamily: "Merriweather",
    fontWeight: 700,
    fontSize: "1.5em",
  },
  spareicon: {
    height: "3em",
  },
  tableHeading: {
    margin: "1em 0",
  },

  subHeading: {
    fontWeight: "bold",
    marginRight: "0.5em",
  },
  root: {
    minHeight: 150,
    marginTop: "2em",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: "1em",
    color: theme.palette.common.green,
  },
}));

const SiteInfo = ({ site }) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(site);

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography>
                <span className={classes.subHeading}>Site Name: </span>
                {site.site}
              </Typography>

              <Typography gutterBottom>
                <span className={classes.subTitle}>Manager Information </span>
                <br />
                <span className={classes.subHeading}>Name: </span>
                {site.manager_name}
                <br />
                <span className={classes.subHeading}>Email: </span>{" "}
                {site.manager_email}
                <br />
                <span className={classes.subHeading}>Phone: </span>{" "}
                {site.manager_phone}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ borderLeft: "1px solid #eee", paddingLeft: "1em" }}
            >
              <Typography>
                <span className={classes.subHeading}>Address: </span>
                {site.address}
              </Typography>

              <Typography gutterBottom>
                <span className={classes.subTitle}>Supervisor Information</span>
                <br />
                <span className={classes.subHeading}>Name:</span>{" "}
                {site.supervisor_name}
                <br />
                <span className={classes.subHeading}>Email: </span>{" "}
                {site.supervisor_email}
                <br />
                <span className={classes.subHeading}>Phone: </span>{" "}
                {site.supervisor_phone}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default SiteInfo;
