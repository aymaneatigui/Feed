import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const item_url = `${import.meta.env.VITE_BACKEND_URL}/api/item`;
const api = axios.create({
  headers: { "Cache-Control": "no-cache" },
});

export const getItemsAc = createAsyncThunk(
  "items/getItems",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(item_url);
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const addItemAc = createAsyncThunk(
  "items/addItem",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(item_url, data);
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const updateItemAc = createAsyncThunk(
  "items/updateItem",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.put(`${item_url}/${id}`, data);
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const deleteItemAc = createAsyncThunk(
  "items/deleteItem",
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await api.delete(`${item_url}/${id}`);
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);
