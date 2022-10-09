import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./populateData/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
