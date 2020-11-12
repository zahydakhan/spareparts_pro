import React, { useEffect, useState } from "react";
import AllQuaries from "./components/admin-quary/quaries";
import SparepartsLoading from "./components/ui/SparepartsLoading";
import axiosInstance from "./axios";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import SpareIcon from "./assets/sparepart1.png";

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

function AdminQuary() {
  const SpareLoading = SparepartsLoading(AllQuaries);
  const [appState, setAppState] = useState({
    loading: true,
    quary: null,
  });
  const classes = useStyles();
  const theme = useTheme();
  const [searchResult, setSearchResult] = React.useState("");

  useEffect(() => {
    axiosInstance.get(`/parts/quaries/`).then((res) => {
      const quaries = res.data;
      console.log(quaries);

      if (searchResult) {
        const filteredData = quaries.filter((cty) =>
          cty.site.toLowerCase().includes(searchResult.toLowerCase())
        );
        console.log(filteredData);
        setAppState({ loading: false, quary: filteredData });
      } else {
        setAppState({ loading: false, quary: quaries });
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
              Edit Sites
            </Typography>
          </Grid>
        </Grid>

        <input
          type="Search"
          placeholder="Search Sites"
          onChange={(e) => setSearchResult(e.target.value)}
          className={classes.search}
        />

        <SpareLoading isLoading={appState.loading} quaries={appState.quary} />
      </Container>
    </React.Fragment>
  );
}
export default AdminQuary;
