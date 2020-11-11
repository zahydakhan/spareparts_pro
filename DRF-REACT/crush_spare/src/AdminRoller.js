import React, { useEffect, useState } from "react";
import AllRollers from "./components/admin-roller/rollers";
import SparepartsLoading from "./components/ui/SparepartsLoading";
import axiosInstance from "./axios";

function AdminQuary() {
  const RollerLoading = SparepartsLoading(AllRollers);
  const [appState, setAppState] = useState({
    loading: true,
    roller: null,
  });

  useEffect(() => {
    axiosInstance.get(`/roller/`).then((res) => {
      const rollers = res.data;
      console.log(rollers);
      setAppState({ loading: false, roller: rollers });
    });
  }, [setAppState]);

  return (
    <div className="App">
      <h1>List of all Rollers</h1>
      <RollerLoading isLoading={appState.loading} rollers={appState.roller} />
    </div>
  );
}
export default AdminQuary;
