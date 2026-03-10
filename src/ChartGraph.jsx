import { useSelector, useDispatch } from "react-redux";
import { addWidget } from "./widgetsSlice";
import { checkWidgets } from "./dashboardSlice";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function ChartGraph() {
  const { xAxis, yAxis, colorPicker, chartType, title } = useSelector(
    (state) => state.dashboard.chartData,
  );
  const data = [...useSelector((state) => state.dashboard.jsonData)].sort(
    (a, b) => a[xAxis] - b[xAxis],
  );

  const currentPage = useSelector((state) => state.dashboard.currentPage);

  const dispatch = useDispatch();

  const xType = typeof data[0][xAxis] === "number" ? "number" : "category";

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  const handleAddGraph = () => {
    alert("Graph Added Successfully");
    dispatch(addWidget({ xAxis, yAxis, colorPicker, chartType, title }));
    let widgets = JSON.parse(localStorage.getItem("widgets"));
    if (widgets === null) widgets = [];
    widgets.push({ xAxis, yAxis, colorPicker, chartType });
    localStorage.setItem("widgets", JSON.stringify(widgets));
  };

  return (
    <div className="chart-graph">
      {chartType === "bar" && (
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={data}
            margin={{ bottom: 40, left: 20, top: 20, right: 10 }}
          >
            <XAxis
              dataKey={xAxis}
              type={xType}
              domain={xType === "number" ? ["auto", "auto"] : undefined}
              label={{ value: xAxis, position: "insideBottom", offset: -20 }}
            />
            <YAxis
              label={{ value: yAxis, angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Bar dataKey={yAxis} fill={colorPicker} />
          </BarChart>
        </ResponsiveContainer>
      )}

      {chartType === "line" && (
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={data}
            margin={{ bottom: 40, left: 20, top: 20, right: 10 }}
          >
            <XAxis
              dataKey={xAxis}
              type={xType}
              domain={xType === "number" ? ["auto", "auto"] : undefined}
              label={{ value: xAxis, position: "insideBottom", offset: -20 }}
            />
            <YAxis
              label={{ value: yAxis, angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Line dataKey={yAxis} stroke={colorPicker} />
          </LineChart>
        </ResponsiveContainer>
      )}
      {chartType === "pie" && (
        <div
          className="responsive-pie"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <PieChart width={1100} height={600}>
            <Pie
              data={data}
              dataKey={yAxis}
              nameKey={xAxis}
              cx="50%"
              cy="50%"
              outerRadius={250}
              label={({ name, value }) =>
                `${xAxis}: ${name} | ${yAxis}: ${value}`
              }
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      )}

      <button className="add-graph" onClick={handleAddGraph}>
        Add Graph
      </button>
      <button
        className="go-to-widgets"
        onClick={() => {
          dispatch(checkWidgets());
        }}
      >
        Go to Widgets
      </button>
    </div>
  );
}
