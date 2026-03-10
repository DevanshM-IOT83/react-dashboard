import { createSlice } from "@reduxjs/toolkit";

const data = JSON.parse(localStorage.getItem("widgets"));
const placedData = JSON.parse(localStorage.getItem("placedWidgets"));

const initial = {
  charts: data !== null ? data : [],
  showCanvasSidebar: false,
  placedCharts: placedData !== null ? placedData : [],
};

const widgetsSlice = createSlice({
  name: "widgets",
  initialState: initial,
  reducers: {
    addWidget: (state, action) => {
      state.charts.push(action.payload);
      localStorage.setItem("widgets", JSON.stringify(state.charts));
    },
    showChildren: (state, action) => {
      state.showCanvasSidebar = !state.showCanvasSidebar;
    },
    placeChart: (state, action) => {
      state.placedCharts.push(action.payload);
      state.charts = state.charts.filter(
        (obj) => JSON.stringify(obj) !== JSON.stringify(action.payload),
      );
      localStorage.setItem("widgets", JSON.stringify(state.charts));
      localStorage.setItem("placedWidgets", JSON.stringify(state.placedCharts));
    },
    resetWidgetsState: (state, action) => {
      state.charts = [];
      state.showCanvasSidebar = false;
      state.placedCharts = [];
    },
  },
});

export const { addWidget, showChildren, placeChart, resetWidgetsState } =
  widgetsSlice.actions;

export default widgetsSlice.reducer;
