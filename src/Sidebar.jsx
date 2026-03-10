import { useSelector } from "react-redux";
import WidgetCard from "./WidgetCard";
// console.log(WidgetCard);
export default function Sidebar() {
  const charts = useSelector((state) => state.widgets.charts);

  return (
    <div className="sidebar">
      {charts.map((obj) => (
        <WidgetCard key={obj.title} chartData={obj} />
      ))}
    </div>
  );
}
