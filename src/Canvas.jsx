import { useDroppable } from "@dnd-kit/core";
import { useSelector } from "react-redux";
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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

export default function Canvas() {
  const jsonData = useSelector((state) => state.dashboard.jsonData);
  const placedCharts = useSelector((state) => state.widgets.placedCharts);
  const { setNodeRef, isOver, rect } = useDroppable({
    id: "canvas",
  });
  console.log("setNodeRef:", setNodeRef);
  console.log("isOver:", isOver);
  console.log("rect:", rect);
  //   const { xAxis, yAxis, colorPicker, chartType, title } = placedCharts;

  return (
    <div id="canvas" ref={setNodeRef}>
      <h2>Drop Widgets here:</h2>
      {placedCharts.map(({ xAxis, yAxis, colorPicker, chartType, title }) => {
        const data = [...jsonData].sort((a, b) => a[xAxis] - b[yAxis]);
        const xType =
          typeof data[0]?.[xAxis] === "number" ? "number" : "category";
        if (chartType === "bar")
          return (
            <ResponsiveContainer width="100%" height={500} key={title}>
              <BarChart
                data={data}
                margin={{ bottom: 40, left: 20, top: 20, right: 10 }}
              >
                <XAxis
                  dataKey={xAxis}
                  type={xType}
                  domain={xType === "number" ? ["auto", "auto"] : undefined}
                  label={{
                    value: xAxis,
                    position: "insideBottom",
                    offset: -20,
                  }}
                />
                <YAxis
                  label={{ value: yAxis, angle: -90, position: "insideLeft" }}
                />
                <Tooltip />
                <Bar dataKey={yAxis} fill={colorPicker} />
              </BarChart>
            </ResponsiveContainer>
          );

        if (chartType === "line")
          return (
            <ResponsiveContainer width="100%" height={500} key={title}>
              <LineChart
                data={data}
                margin={{ bottom: 40, left: 20, top: 20, right: 10 }}
              >
                <XAxis
                  dataKey={xAxis}
                  type={xType}
                  domain={xType === "number" ? ["auto", "auto"] : undefined}
                  label={{
                    value: xAxis,
                    position: "insideBottom",
                    offset: -20,
                  }}
                />
                <YAxis
                  label={{ value: yAxis, angle: -90, position: "insideLeft" }}
                />
                <Tooltip />
                <Line dataKey={yAxis} stroke={colorPicker} />
              </LineChart>
            </ResponsiveContainer>
          );
        return (
          <div
            className="responsive-pie"
            style={{ display: "flex", justifyContent: "center" }}
            key={title}
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
        );
      })}
    </div>
  );
}
