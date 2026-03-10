import JsonInput from "./JsonInput";
import Table from "./Table";
import ChartForm from "./ChartForm";
import ChartGraph from "./ChartGraph";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import {
  uncheckLogIn,
  resetDashboardState,
  checkWidgets,
} from "./dashboardSlice";
import { resetWidgetsState } from "./widgetsSlice";
import { useEffect } from "react";

export default function Dashboard() {
  const userName = JSON.parse(localStorage.getItem("user")).username;
  const data = useSelector((state) => state.dashboard.jsonData);
  const chartData = useSelector((state) => state.dashboard.chartData);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.clear();
    // dispatch(uncheckLogIn());
    dispatch(resetDashboardState());
    dispatch(resetWidgetsState());
  };

  return (
    <div className="dashboard">
      <h1>Welcome to {userName}'s Dashboard</h1>
      <div className="logout" style={{ marginBottom: "3rem" }}>
        <button onClick={handleLogOut}>LogOut</button>
      </div>

      <JsonInput />
      {data.length > 0 && [
        <Table key="table" />,
        <ChartForm key="chart-form" />,
      ]}
      <button
        className="go-to-widgets"
        onClick={() => {
          dispatch(checkWidgets());
        }}
      >
        Go to Widgets
      </button>
      {Object.keys(chartData).length > 0 && <ChartGraph />}
    </div>
  );
}
