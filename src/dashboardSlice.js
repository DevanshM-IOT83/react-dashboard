import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    jsonData: [],
    chartData: {},
    isLoggedIn: JSON.parse(localStorage.getItem("user")) !== null,
  },
  reducers: {
    addJson: (state, action) => {
      state.jsonData = action.payload;
    },
    addChart: (state, action) => {
      state.chartData = action.payload;
    },
    checkLogIn: (state, action) => {
      state.isLoggedIn = true;
    },
    uncheckLogIn: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { addJson, addChart, checkLogIn, uncheckLogIn } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
