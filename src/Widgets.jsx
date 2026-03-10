// import { useSelector, useDispatch } from "react-redux";
// import { showChildren, placeChart } from "./widgetsSlice";
// import { uncheckWidgets } from "./dashboardSlice";
// import Sidebar from "./Sidebar";
// import Canvas from "./Canvas";
// import { DndContext, pointerWithin } from "@dnd-kit/core";
// import TestDrop from "./TestDrop";

// export default function Widgets() {
//   const showCanvasSidebar = useSelector(
//     (state) => state.widgets.showCanvasSidebar,
//   );
//   const charts = useSelector((state) => state.widgets.charts);
//   const dispatch = useDispatch();
//   const handleClick = () => {
//     dispatch(showChildren());
//   };

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     console.log("full event:", event);
//     console.log("active:", event.active);
//     console.log("over:", event.over);
//     console.log("inside handledragend before if statement");
//     console.log(over);
//     if (over && over.id === "canvas") {
//       // do something with store
//       console.log("inside handle drag end");
//       console.log(active.id);
//       const droppedChart = charts.find((ch) => ch.title === active.id);
//       dispatch(placeChart(droppedChart));
//     }
//   };
//   return (
//     <div className="widgets">
//       <header className="widgets-header">
//         <h1>Welcome to Widgets Page</h1>
//         <button
//           onClick={() => {
//             dispatch(uncheckWidgets());
//           }}
//         >
//           Go Back
//         </button>
//         <button onClick={handleClick}>Edit</button>
//       </header>
//       <DndContext onDragEnd={handleDragEnd}>
//         <div className="widgets-children">
//           {true && <Sidebar />}
//           <Canvas />
//           {/* <TestDrop /> */}
//         </div>
//       </DndContext>
//     </div>
//   );
// }

import { useSelector, useDispatch } from "react-redux";
import { showChildren, placeChart } from "./widgetsSlice";
import { uncheckWidgets } from "./dashboardSlice";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import { DndContext, pointerWithin, closestCenter } from "@dnd-kit/core";
import TestDrop from "./TestDrop";

export default function Widgets() {
  const showCanvasSidebar = useSelector(
    (state) => state.widgets.showCanvasSidebar,
  );
  const charts = useSelector((state) => state.widgets.charts);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showChildren());
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === "canvas") {
      // do something with store
      const droppedChart = charts.find((ch) => ch.title === active.id);
      console.log(droppedChart);
      dispatch(placeChart(droppedChart));
    }
  };
  return (
    <div className="widgets">
      <header className="widgets-header">
        <h1>Welcome to Widgets Page</h1>
        <button
          onClick={() => {
            dispatch(uncheckWidgets());
          }}
        >
          Go Back
        </button>
        <button onClick={handleClick}>Edit</button>
      </header>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="widgets-children">
          {showCanvasSidebar && <Sidebar />}
          <Canvas />
        </div>
      </DndContext>
    </div>
  );
}
