import "./App.css";

import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
