import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: localStorage.getItem("mode") === "dark" ? true : false,
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleDarkMode(state, action) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("mode", action.payload);
    },
  },
});

export default globalSlice.reducer;
export const { toggleDarkMode } = globalSlice.actions;
