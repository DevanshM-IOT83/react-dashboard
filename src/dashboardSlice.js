import { createSlice } from "@reduxjs/toolkit";

const data = localStorage.getItem("jsonData");

const initial = {
  jsonData: data === null ? [] : JSON.parse(data),
  chartData: {},
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initial,
  reducers: {
    addJson: (state, action) => {
      state.jsonData = action.payload;
    },
    addChart: (state, action) => {
      state.chartData = action.payload;
    },
    resetDashboardState: (state, action) => {
      state.jsonData = [];
      state.chartData = {};
    },
  },
});

export const { addJson, addChart, resetDashboardState } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
