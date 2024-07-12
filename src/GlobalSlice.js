import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: localStorage.getItem("mode") === "dark" ? true : false,
  isSmallMedium: false,
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleDarkMode(state, action) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("mode", action.payload);
    },
    setIsSmallMedium(state, action) {
      state.isSmallMedium = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { toggleDarkMode, setIsSmallMedium } = globalSlice.actions;
