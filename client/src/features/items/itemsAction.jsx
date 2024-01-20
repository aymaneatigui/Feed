import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = `http://localhost:3001/api/items`;

export const getItems = createAsyncThunk(
  "items/getItems",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      if (!error.response?.data?.message) {
        throw error;
      }
      return rejectWithValue(error.response.data.message);
    }
  },
);
