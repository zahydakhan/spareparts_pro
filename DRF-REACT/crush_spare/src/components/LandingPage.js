import React, { useEffect, useState } from "react";
import SparepartsTable from "./SparepartsTable1";
import SparepartsLoadingComponent from "./ui/SparepartsLoading";
import axiosInstance from "../axios";

const rows = [];
const columns = [];

function LandingPage() {
  const SpareLoading = SparepartsLoadingComponent(SparepartsTable);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });
  const [searchResult, setSearchResult] = React.useState("");
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    axiosInstance.get("parts/spare/").then((res) => {
      const tableData = res.data;
      setAppState({ loading: false, posts: tableData });
      console.log(res.data);
      if (searchResult) {
        const filteredData = tableData.filter((cty) =>
          cty.part_number.includes(searchResult)
        );
        console.log(filteredData);
        setRows(filteredData);
      } else {
        setRows(tableData);
      }
    });
  }, [setAppState, searchResult]);
  return (
    <div className="App">
      <h1>Spare Parts</h1>
      <input
        type="Search"
        placeholder="Search Spareparts"
        onChange={(e) => setSearchResult(e.target.value)}
        className="table__search"
      />
      <SpareLoading
        columns={columns}
        rows={rows}
        isLoading={appState.loading}
        posts={appState.posts}
      />
    </div>
  );
}
export default LandingPage;
