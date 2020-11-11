import React, { useEffect, useState } from "react";
import RollerTable from "./RollerTable";
import SparepartsLoading from "../ui/SparepartsLoading";
import axiosInstance from "../../axios";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "6em",
    marginTop: "2em",
  },
}));

const rows = [];
const columns = [];

function RollerTableContainer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const RollerLoading = SparepartsLoading(RollerTable);
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
          cty.description.includes(searchResult)
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
        fixed
        //minWidth="md"
        component="main"
        className={classes.mainContainer}
      >
        <Typography variant="h2">Roller List</Typography>
        <input
          type="Search"
          placeholder="Search Spareparts"
          onChange={(e) => setSearchResult(e.target.value)}
          className="table__search"
        />
        <RollerLoading
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
