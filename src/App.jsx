import { useState } from "react";
import { useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const isLoggedIn = useSelector((state) => state.dashboard.isLoggedIn);
  return <>{isLoggedIn ? <Dashboard /> : <Login />}</>;
}

export default App;
