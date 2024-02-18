import { createSlice } from "@reduxjs/toolkit";
import {
  addCategoryItemAc,
  deleteCategoryItemAc,
  getCategoryItemAc,
  updateCategoryItemAc,
} from "./categoryItemAction.jsx";

const categoryItemFromStorage = localStorage.getItem("categoryItem");
const initialState = {
  error: null,
  status: "idle",
  categoryItem:
    categoryItemFromStorage && categoryItemFromStorage !== "undefined"
      ? JSON.parse(categoryItemFromStorage)
      : [],
};

const categoryItem = createSlice({
  name: "categoryItem",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Get CategoryItem
      .addCase(getCategoryItemAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCategoryItemAc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categoryItem = action.payload.data;
        state.error = null;
        localStorage.setItem(
          "categoryItem",
          JSON.stringify(state.categoryItem),
        );
      })
      .addCase(getCategoryItemAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      })

      // Add CategoryItem
      .addCase(addCategoryItemAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addCategoryItemAc.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(addCategoryItemAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      })

      // update CategoryItem
      .addCase(updateCategoryItemAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateCategoryItemAc.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(updateCategoryItemAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      })

      // Delete CategoryItem
      .addCase(deleteCategoryItemAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteCategoryItemAc.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(deleteCategoryItemAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      });
  },
});

export default categoryItem.reducer;
