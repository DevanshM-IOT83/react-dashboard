import { useDroppable } from "@dnd-kit/core";
import { useSelector } from "react-redux";

export default function TestDrop() {
  const placedCharts = useSelector((state) => state.widgets.placedCharts);
  const { setNodeRef, isOver, rect } = useDroppable({ id: "canvas2" });

  console.log(" droppable rect:", rect);
  console.log("isOver:", isOver);

  return (
    <div
      ref={setNodeRef}
      style={{ width: "500px", height: "500px", background: "red" }}
    >
      test
      {placedCharts.length};
      {placedCharts.map((chart) => (
        <div key={chart.title}>{chart.title}divvv</div>
      ))}
    </div>
  );
}
