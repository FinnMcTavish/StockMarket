import "./App.css";

import LoginGraph from "./components/landing_page/first_half/LoginGraph";

import HowtoPlay from "./components/landing_page/first_half/HowtoPlay";

import LineChart from "./components/landing_page/last_half/LineChart";

const App = () => {
  return (
    <div>
      <LoginGraph />
      <HowtoPlay />
      <LineChart />
    </div>
  );
};

export default App;
