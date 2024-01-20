import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const category_url = `http://localhost:3001/api/category`;
const api = axios.create({
  headers: { "Cache-Control": "no-cache" },
});

export const getCategoriesAc = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(category_url);
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const addCategoryAc = createAsyncThunk(
  "categories/addCategory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(category_url, data);
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const updateCategoryAc = createAsyncThunk(
  "categories/updateCategory",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.put(`${category_url}/${id}`, data);
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const deleteCategoryAc = createAsyncThunk(
  "categories/deleteCategory",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await api.delete(`${category_url}/${id}`);
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);
