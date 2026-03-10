import { useState } from "react";
import { useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Widgets from "./Widgets";
import "./App.css";
import Test from "./Test";

function App() {
  const currentPage = useSelector((state) => state.dashboard.currentPage);
  // return <>{isLoggedIn ? <Dashboard /> : <Login />}</>;
  return (
    <>
      {currentPage === "login" && <Login />}
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "widgets" && <Widgets />}
    </>
  );
}

export default App;
