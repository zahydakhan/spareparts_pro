import React, { useEffect, useState } from "react";
import SparepartsTable from "./SparepartsTable1";
import SparepartsLoadingComponent from "./ui/SparepartsLoading";

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
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/parts/spare/`;
    fetch(apiUrl)
      .then((data) => data.json())
      .then((response) => {
        setAppState({ loading: false, posts: response });
        console.log(response);
        if (searchResult) {
          const filteredData = response.filter((cty) =>
            cty.part_number.includes(searchResult)
          );
          console.log(filteredData);
          setRows(filteredData);
        } else {
          setRows(response);
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
