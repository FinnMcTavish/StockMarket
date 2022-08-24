import React from "react";

import BuySell from "../components/dashboardPage/buysell/BuySell";

import GraphMaker from "../components/dashboardPage/GraphMaker/GraphMaker";

const Dashboard = () => {
  return (
    <div>
      <BuySell />
      {/* <GraphMaker product="IBM" height={300} width={550} /> */}
    </div>
  );
};

export default Dashboard;
