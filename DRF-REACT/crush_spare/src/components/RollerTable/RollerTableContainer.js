import React, { useEffect, useState } from "react";
import RollerTable from "./RollerTable";
import SparepartsLoadingComponent from "../ui/SparepartsLoading";
import axiosInstance from "../../axios";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { TextareaAutosize } from "@material-ui/core";
import RollerIcon from "../../assets/roller.png";

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
    paddingLeft: "1em",
  },
  title: {
    fontFamily: "Merriweather",
    fontWeight: 700,
    fontSize: "1.5em",
  },
  rollericon: {
    height: "3em",
  },
  tableHeading: {
    margin: "1em 0",
  },
}));

const rows = [];
const columns = [];

function RollerTableContainer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const SpareLoading = SparepartsLoadingComponent(RollerTable);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });
  const [searchResult, setSearchResult] = React.useState("");
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    axiosInstance.get("roller/").then((res) => {
      const tableData = res.data;
      setAppState({ loading: false, posts: tableData });
      console.log(res.data);
      if (searchResult) {
        const filteredData = tableData.filter((cty) =>
          cty.description.toLowerCase().includes(searchResult.toLowerCase())
        );
        console.log(filteredData);
        setRows(filteredData);
      } else {
        setRows(tableData);
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
              src={RollerIcon}
              className={classes.rollericon}
              alt="roller parts icon"
            />
          </Grid>
          <Grid item>
            <Typography variant="h3" className={classes.title}>
              Roller Spare Parts
            </Typography>
          </Grid>
        </Grid>

        <input
          type="Search"
          placeholder="Search Roller Spareparts"
          onChange={(e) => setSearchResult(e.target.value)}
          className={classes.search}
        />

        <SpareLoading
          cart={props.cart}
          setCart={props.setCart}
          columns={columns}
          rows={rows}
          isLoading={appState.loading}
          posts={appState.posts}
        />
      </Container>
    </React.Fragment>
  );
}
export default RollerTableContainer;
