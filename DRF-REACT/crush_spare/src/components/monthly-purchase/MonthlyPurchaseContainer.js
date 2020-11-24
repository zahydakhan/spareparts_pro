import React, { useEffect, useState } from "react";
import MonthlyPurchaseTable from "./MonthlyPurchaseTable";
import SparepartsLoadingComponent from "../ui/SparepartsLoading";
import axiosInstance from "../../axios";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import SpareIcon from "../../assets/sparepart1.png";

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
}));

const rows = [];
const columns = [];

function MonthlyPurchaseContainer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const SpareLoading = SparepartsLoadingComponent(MonthlyPurchaseTable);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });
  const [searchResult, setSearchResult] = React.useState("");
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    axiosInstance.get("/parts/orders/").then((res) => {
      console.log(res);
      setAppState({ loading: false, posts: res.data });

      if (searchResult) {
        const filteredData = res.data.filter((cty) =>
          cty.part_number.toLowerCase().includes(searchResult.toLowerCase())
        );
        console.log(filteredData);
        setRows(filteredData);
      } else {
        setRows(res.data);
      }
    });
  }, [setAppState, searchResult]);
  return (
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
        >
          <Grid item>
            <img
              src={SpareIcon}
              className={classes.spareicon}
              alt="spare parts icon"
            />
          </Grid>
          <Grid item>
            <Typography variant="h3" className={classes.title}>
              Crushing Spare Parts
            </Typography>
          </Grid>
        </Grid>

        <input
          type="Search"
          placeholder="Search Spareparts"
          onChange={(e) => setSearchResult(e.target.value)}
          className={classes.search}
        />

        <SpareLoading
          mainOrder={props.mainOrder}
          setMainOrder={props.setMainOrder}
          columns={columns}
          rows={rows}
          isLoading={appState.loading}
          posts={appState.posts}
        />
      </Container>
    </React.Fragment>
  );
}
export default MonthlyPurchaseContainer;
