import React, { useEffect, useState } from "react";

import Spares from "./components/admin/spares";
import SparepartsLoading from "./components/ui/SparepartsLoading";
import axiosInstance from "./axios";

function Admin() {
  const SpareLoading = SparepartsLoading(Spares);
  const [appState, setAppState] = useState({
    loading: true,
    spares: null,
  });

  useEffect(() => {
    axiosInstance.get(`/parts/`).then((res) => {
      const allPosts = res.data;
      console.log(allPosts);
      setAppState({ loading: false, spares: allPosts });
      console.log(res.data);
    });
  }, [setAppState]);

  return (
    <div className="App">
      <h1>List of All Spare Parts</h1>
      <SpareLoading isLoading={appState.loading} spares={appState.spares} />
    </div>
  );
}
export default Admin;
