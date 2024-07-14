import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: localStorage.getItem("mode") === "dark" ? true : false,
  isSmallMedium: false,
  isMainScrolled: false,
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
    setIsMainScrolled(state, action) {
      state.isMainScrolled = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { toggleDarkMode, setIsSmallMedium, setIsMainScrolled } =
  globalSlice.actions;
