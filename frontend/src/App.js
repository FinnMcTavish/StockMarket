import "./App.css";

import LoginGraph from "./components/landing_page/div1/LoginGraph";

import HowtoPlay from "./components/landing_page/div2/HowtoPlay";

import LineChart from "./components/landing_page/div3/LineChart";

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
