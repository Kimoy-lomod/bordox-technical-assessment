import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    dataAdded(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        details: action.payload.details,
      });
    },
  },
});

export const { dataAdded } = dataSlice.actions;
export default dataSlice.reducer;
