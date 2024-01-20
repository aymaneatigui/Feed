import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = `http://localhost:3001/api/categoryItem`;

export const getCategoryItem = createAsyncThunk(
  "categoryItem/getCategoryItem",
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
