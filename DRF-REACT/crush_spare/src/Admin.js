import React, { useEffect, useState } from "react";
import Spares from "./components/admin/spares";
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

function Admin() {
  const SpareLoading = SparepartsLoading(Spares);
  const [appState, setAppState] = useState({
    loading: true,
    spares: null,
  });
  const classes = useStyles();
  const theme = useTheme();
  const [searchResult, setSearchResult] = React.useState("");

  useEffect(() => {
    axiosInstance.get(`/parts/`).then((res) => {
      const allPosts = res.data;
      console.log(allPosts);

      if (searchResult) {
        const filteredData = allPosts.filter((cty) =>
          cty.part_number.toLowerCase().includes(searchResult.toLowerCase())
        );
        console.log(filteredData);
        setAppState({ loading: false, spares: filteredData });
      } else {
        setAppState({ loading: false, spares: allPosts });
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
              Edit Crushing Spare Parts
            </Typography>
          </Grid>
        </Grid>

        <input
          type="Search"
          placeholder="Search Spareparts"
          onChange={(e) => setSearchResult(e.target.value)}
          className={classes.search}
        />

        <SpareLoading isLoading={appState.loading} spares={appState.spares} />
      </Container>
    </React.Fragment>
  );
}
export default Admin;
