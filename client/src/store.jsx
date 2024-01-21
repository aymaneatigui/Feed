import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./features/items/itemsSlice.jsx";
import categoriesSlice from "./features/categories/categoriesSlice.jsx";
import categoryItemSlice from "./features/categoryItem/categoryItemSlice.jsx";
import configSlice from "./features/config/configSlice.jsx"

const store = configureStore({
  reducer: {
    items: itemsSlice,
    categories: categoriesSlice,
    categoryItem: categoryItemSlice,
    config: configSlice,
  },
});

export default store;
