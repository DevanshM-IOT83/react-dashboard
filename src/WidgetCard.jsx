import { useDraggable } from "@dnd-kit/core";

export default function WidgetCard({ chartData }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: chartData.title,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  const col = { pie: "tomato", bar: "blue", line: "green" };
  console.log("heres widget card");
  console.log(chartData);
  return (
    <div
      className="widget-card"
      style={{ ...style, color: col[chartData.chartType] }}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
    >
      <p>{chartData.title}</p>
      <p>{chartData.chartType}</p>
    </div>
  );
}
