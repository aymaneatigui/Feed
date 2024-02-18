import { createSlice } from "@reduxjs/toolkit";
import {
  addItemAc,
  deleteItemAc,
  getItemsAc,
  updateItemAc,
} from "./itemsAction.jsx";

function indexItemsById(items) {
  return items.reduce((index, item) => {
    index[item.id] = item;
    return index;
  }, {});
}

const itemsLocalStorage = localStorage.getItem("items");
const indexedItemsStorage = localStorage.getItem("indexedItems");

const initialState = {
  error: null,
  status: "idle",
  items:
    itemsLocalStorage && itemsLocalStorage != "undefined"
      ? JSON.parse(itemsLocalStorage)
      : [],
  indexedItems:
    indexedItemsStorage && indexedItemsStorage != "undefined"
      ? JSON.parse(indexedItemsStorage)
      : [],
};

const items = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Get Items
      .addCase(getItemsAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getItemsAc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data;
        state.indexedItems = indexItemsById(state.items);

        state.error = null;
        localStorage.setItem("items", JSON.stringify(state.items));
        localStorage.setItem(
          "indexedItems",
          JSON.stringify(state.indexedItems),
        );
      })
      .addCase(getItemsAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      })

      // Add Item
      .addCase(addItemAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addItemAc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        const newItem = action.payload.data;
        state.items = [...state.items, newItem];
        state.indexedItems = indexItemsById(state.items);
        localStorage.setItem("items", JSON.stringify(state.items));
        localStorage.setItem(
          "indexedItems",
          JSON.stringify(state.indexedItems),
        );
      })
      .addCase(addItemAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      })
      // Update Item
      .addCase(updateItemAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateItemAc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;

        const updatedItem = action.payload.data;
        //fidn the item index in the list
        const itemIndex = state.items.findIndex(
          (item) => item?.id === updatedItem?.id,
        );
        if (itemIndex !== -1) state.items[itemIndex] = updatedItem;

        localStorage.setItem("items", JSON.stringify(state.items));
      })
      .addCase(updateItemAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      })
      // Delete Item
      .addCase(deleteItemAc.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteItemAc.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        const deletedItem = action.payload.data;
        state.items = state.items.filter(
          (item) => item?.id !== deletedItem?.id,
        );
        state.indexedItems = indexItemsById(state.items);

        localStorage.setItem("items", JSON.stringify(state.items));
        localStorage.setItem(
          "indexedItems",
          JSON.stringify(state.indexedItems),
        );
      })
      .addCase(deleteItemAc.rejected, (state, action) => {
        state.status = "failed";
        action.payload
          ? (state.error = action.payload)
          : (state.error = action.error.message);
      });
  },
});

export default items.reducer;
