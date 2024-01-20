import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoriesAction.jsx";

const initialState = {
  error: null,
  status: "idle",
  categories: localStorage.getItem("categories")
    ? JSON.parse(localStorage.getItem("categories"))
    : null,
};

const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload.data;
        state.error = null;
        localStorage.setItem("categories", JSON.stringify(action.payload.data));
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
        action.payload
        ? (state.error = action.payload)
        : (state.error = action.error.message);
        console.log(state.error)
      });
  },
});

export default categories.reducer;
