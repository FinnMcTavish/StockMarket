import "./App.css";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./pages/Registration";

const App = () => {
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={!username ? <Navigate to="/login" /> : <Profile />}
        />
        ;
      </Routes>
    </BrowserRouter>
  );
};

export default App;
