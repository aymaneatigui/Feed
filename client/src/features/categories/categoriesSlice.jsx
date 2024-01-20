import { createSlice } from "@reduxjs/toolkit";
import {
  addCategoryAc,
  deleteCategoryAc,
  getCategoriesAc,
  updateCategoryAc,
} from "./categoriesAction.jsx";

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
      //Get Categories
      .addCase(getCategoriesAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCategoriesAc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload.data;
        state.error = null;
        localStorage.setItem("categories", JSON.stringify(state.categories));
      })
      .addCase(getCategoriesAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      })

      //Add Categories
      .addCase(addCategoryAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addCategoryAc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        const newCategory = action.payload.data;
        state.categories = [...state.categories, newCategory];
        localStorage.setItem("categories", JSON.stringify(state.categories));
      })
      .addCase(addCategoryAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      })

      // Update Category
      .addCase(updateCategoryAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateCategoryAc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;

        const updatedCategory = action.payload.data;

        //fidn the category index in the list
        const categoryIndex = state.categories.findIndex(
          (category) => category.id === updatedCategory.id,
        );
        if (categoryIndex !== -1)
          state.categories[categoryIndex] = updatedCategory;

        localStorage.setItem("categories", JSON.stringify(state.categories));
      })
      .addCase(updateCategoryAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      })

      // Delete Category
      .addCase(deleteCategoryAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteCategoryAc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        const deletedCategory = action.payload.data;
        state.categories = state.categories.filter(
          (category) => category.id !== deletedCategory.id,
        );
        localStorage.setItem("categories", JSON.stringify(state.categories));
      })
      .addCase(deleteCategoryAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      });
  },
});

export default categories.reducer;
