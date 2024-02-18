import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const categoryItem_url = `${import.meta.env.VITE_BACKEND_URL}/api/categoryItem`;
const api = axios.create({
  headers: { "Cache-Control": "no-cache" },
});

export const getCategoryItemAc = createAsyncThunk(
  "categoryItem/getCategoryItem",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(categoryItem_url);
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const addCategoryItemAc = createAsyncThunk(
  "categoryItem/addCategoryItem",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.post(categoryItem_url, data);
      dispatch(getCategoryItemAc());

      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const updateCategoryItemAc = createAsyncThunk(
  "items/updateItem",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.put(categoryItem_url, data);
      dispatch(getCategoryItemAc());
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const deleteCategoryItemAc = createAsyncThunk(
  "items/deleteItem",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.delete(categoryItem_url, { data });
      dispatch(getCategoryItemAc());
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);
