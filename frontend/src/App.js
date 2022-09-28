import "./App.css";
import { useState } from "react";
import React from "react";


import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./pages/Registration";

const App = () => {
  const [active, setActive] = useState(sessionStorage.getItem("active"));

  if (new Date().getTime() - active > 5 * 60 * 1000 || !active) {
    sessionStorage.clear();
    // alert("Session expired!");
  } else {
    // setActive(new Date().getTime());
    sessionStorage.setItem("active", new Date().getTime());
  }
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path="/dashboard"
          element={!username ? <Navigate to="/login" /> : <Dashboard />}
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/MainPage" element={<MainPage />} />
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
