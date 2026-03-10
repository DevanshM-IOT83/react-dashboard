import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboardSlice";
import widgetsReducer from "./widgetsSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    widgets: widgetsReducer,
  },
});
