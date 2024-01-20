import { createSlice } from "@reduxjs/toolkit";
import {getCategoryItem} from "./categoryItemAction.jsx";

const initialState = {
  error: null,
  status: "idle",
  categoryItem: localStorage.getItem("categoryItem")
    ? JSON.parse(localStorage.getItem("categoryItem"))
    : null,
};

const categoryItem = createSlice({
  name: "categoryItem",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategoryItem.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCategoryItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categoryItem = action.payload.data;
        state.error = null;
        localStorage.setItem(
          "categoryItem",
          JSON.stringify(action.payload.data),
        );
      })
      .addCase(getCategoryItem.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
        console.log(state.error);
      });
  },
});

export default categoryItem.reducer;
