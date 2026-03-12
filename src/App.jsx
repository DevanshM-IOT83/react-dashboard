import { useState } from "react";
import { useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Widgets from "./Widgets";
import "./App.css";
import Test from "./Test";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  // const currentPage = useSelector((state) => state.dashboard.currentPage);
  // return <>{isLoggedIn ? <Dashboard /> : <Login />}</>;
  return (
    // <>
    //   {currentPage === "login" && <Login />}
    //   {currentPage === "dashboard" && <Dashboard />}
    //   {currentPage === "widgets" && <Widgets />}
    // </>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/widgets" element={<Widgets />} />
    </Routes>
  );
}

export default App;
