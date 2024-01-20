import { createSlice } from "@reduxjs/toolkit";
import { getItems } from "./itemsAction.jsx";

const initialState = {
  error: null,
  status: "idle",
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : null,
};

const items = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getItems.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data;
        state.error = null;
        localStorage.setItem("items", JSON.stringify(action.payload.data));
      })
      .addCase(getItems.rejected, (state, action) => {
        state.status = "failed";
        action.payload
        ? (state.error = action.payload)
        : (state.error = action.error.message);
        console.log(state.error)
      });
  },
});

export default items.reducer;
