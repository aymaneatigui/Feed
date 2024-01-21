import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
};

const config = createSlice({
  name: "config",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.sidebar = true;
    },
    closeSidebar: (state) => {
      state.sidebar = false;
    },
  },
});

export const { openSidebar, closeSidebar } = config.actions;
export default config.reducer;
