import React, { useEffect, useState, useRef } from "react";
import MainOrderTable from "./MainOrderTable";
import SparepartsLoadingComponent from "../ui/SparepartsLoading";
import axiosInstance from "../../axios";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import logo from "../../assets/boral-logo.png";
import SiteDropdown from "./siteDropdown";

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
  purchase: {
    ...theme.typography.h2,
    fontSize: "1.7em",
    marginRight: "0.3em",
  },
  logo: {
    margin: "0.5em",
    height: "5em",
    [theme.breakpoints.down("md")]: {
      height: "4em",
      margin: "0.2em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2.9em",
      margin: "0.1em",
    },
  },
  subHeading: {
    fontWeight: "bold",
    marginRight: "0.5em",
  },
  root: {
    minWidth: 100,
    minHeight: 150,
    marginTop: "2em",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: "1.3em",
    color: theme.palette.common.green,
  },
}));

const rows = [];
const columns = [];

const MainOrderContainer = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const SpareLoading = SparepartsLoadingComponent(MainOrderTable);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  const [rows, setRows] = useState([]);

  useEffect(() => {
    axiosInstance.get("/parts/orders/").then((res) => {
      console.log(res);
      setAppState({ loading: false, posts: res.data });

      setRows(res.data);
    });
  }, [setAppState]);

  return (
    <div ref={ref}>
      <React.Fragment>
        <Container
          container
          maxWidth={false}
          component="main"
          className={classes.mainContainer}
          disableGutters
        >
          <Grid
            container
            className={classes.tableHeading}
            alignItems="center"
            spacing={1}
            justify="flex-end"
          >
            <Grid container item xs={6} justify="flex-end" alignItems="center">
              <Grid item>
                <Typography className={classes.purchase}>
                  <Grid container direction="column" alignItems="flex-end">
                    <Grid item>Purchase</Grid>
                    <Grid item>Order</Grid>
                  </Grid>
                </Typography>
              </Grid>
              <Grid item>
                <img className={classes.logo} alt="Boral Logo" src={logo} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid
              sm={6}
              container
              item
              style={{ marginTop: "1em" }}
              alignItems="flex-end"
              direction="column"
            >
              <Typography className={classes.po_info}>
                PO Date: __________________
              </Typography>
              <Typography className={classes.po_info}>
                PO #: _____________________
              </Typography>
            </Grid>
          </Grid>
          <SpareLoading
            mainOrder={props.mainOrder}
            columns={columns}
            rows={rows}
            isLoading={appState.loading}
            posts={appState.posts}
          />
          <SiteDropdown />
        </Container>
      </React.Fragment>
    </div>
  );
});
export default MainOrderContainer;
