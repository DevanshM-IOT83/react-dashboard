import { createSlice } from "@reduxjs/toolkit";

const isWidgets = localStorage.getItem("widgets") !== null;
const isDashboard = localStorage.getItem("user") !== null;
const data = localStorage.getItem("jsonData");

const initial = {
  jsonData: data === null ? [] : JSON.parse(data),
  chartData: {},
  currentPage: isWidgets ? "widgets" : isDashboard ? "dashboard" : "login",
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
    checkLogIn: (state, action) => {
      state.currentPage = "dashboard";
    },
    uncheckLogIn: (state, action) => {
      state.currentPage = "login";
    },
    checkWidgets: (state, action) => {
      state.currentPage = "widgets";
    },
    uncheckWidgets: (state, action) => {
      state.currentPage = "dashboard";
    },
    resetDashboardState: (state, action) => {
      state.jsonData = [];
      state.chartData = {};
      state.currentPage = "login";
    },
  },
});

export const {
  addJson,
  addChart,
  checkLogIn,
  uncheckLogIn,
  checkWidgets,
  uncheckWidgets,
  resetDashboardState,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
