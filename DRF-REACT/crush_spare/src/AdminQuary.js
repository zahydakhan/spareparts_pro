import React, { useEffect, useState } from "react";
import AllQuaries from "./components/admin-quary/quaries";
import SparepartsLoading from "./components/ui/SparepartsLoading";
import axiosInstance from "./axios";

function AdminQuary() {
  const QuaryLoading = SparepartsLoading(AllQuaries);
  const [appState, setAppState] = useState({
    loading: true,
    quary: null,
  });

  useEffect(() => {
    axiosInstance.get(`/parts/quaries/`).then((res) => {
      const quaries = res.data;
      console.log(quaries);
      setAppState({ loading: false, quary: quaries });
      console.log(appState.quary);
    });
  }, [setAppState]);

  return (
    <div className="App">
      <h1>List of all Quaries</h1>
      <QuaryLoading isLoading={appState.loading} quaries={appState.quary} />
    </div>
  );
}
export default AdminQuary;
