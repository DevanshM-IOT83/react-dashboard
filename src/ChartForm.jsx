import { useSelector, useDispatch } from "react-redux";
import { addChart } from "./dashboardSlice";
import { v4 as uuid } from "uuid";
import "./ChartForm.css";
import { useEffect } from "react";

export default function ChartForm() {
  const data = useSelector((state) => state.dashboard.jsonData);
  const labels = Object.keys(data[0]);
  const numLabels = labels.filter((label) => !isNaN(data[0][label]));
  const chartData = useSelector((state) => state.dashboard.chartData);
  const dispatch = useDispatch();

  // const handleAction = (formData) => {
  //   const formDataObj = Object.fromEntries(formData);
  //   dispatch(addChart(formDataObj));
  // };

  const handleAction = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData);
    dispatch(addChart(formDataObj));
  };

  return (
    <form onSubmit={handleAction} className="chart-form">
      <fieldset>
        <legend>Chart Data</legend>
        <div className="chart-form-group">
          <div className="color-picker">
            <label htmlFor="colorPicker">Pick a color: </label>
            <input
              type="color"
              id="colorPicker"
              defaultValue="#1e00ff"
              name="colorPicker"
            />
          </div>
          <select name="chartType" required defaultValue="">
            <option value="" disabled>
              Choose Chart
            </option>
            <option value="bar">Bar</option>
            <option value="line">Line</option>
            <option value="pie">Pie</option>
          </select>
        </div>

        <div className="chart-form-group">
          <select name="xAxis" required defaultValue="">
            <option value="" disabled>
              Choose X Axis
            </option>
            {labels.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>

          <select name="yAxis" required defaultValue="">
            <option value="" disabled>
              Choose Y Axis
            </option>
            {numLabels.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Unique Title"
          style={{ font: "inherit" }}
        />

        <button>Show Chart</button>
      </fieldset>
    </form>
  );
}
