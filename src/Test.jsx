import {
  DndContext,
  pointerWithin,
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";

import { useSelector } from "react-redux";
function Draggable() {
  const {
    setNodeRef: dragRef,
    listeners,
    attributes,
    transform,
  } = useDraggable({ id: "item" });
  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;
  return (
    <div ref={dragRef} {...listeners} {...attributes} style={style}>
      drag me
    </div>
  );
}

function Droppable() {
  const { setNodeRef, isOver, rect } = useDroppable({ id: "canvas" });
  const placedCharts = useSelector((state) => state.widgets.placedCharts);
  const jsonData = useSelector((state) => state.dashboard.jsonData);
  console.log("rect:", rect);
  console.log("isOver:", isOver);
  return (
    <div
      ref={setNodeRef}
      style={{ width: 500, height: 500, background: "lightblue" }}
    >
      drop here
      {placedCharts.map((chart) => (
        <div key={chart.title}>{chart.title}</div>
      ))}
    </div>
  );
}

export default function Test() {
  return (
    <DndContext collisionDetection={pointerWithin}>
      <Draggable />
      <Droppable />
    </DndContext>
  );
}
