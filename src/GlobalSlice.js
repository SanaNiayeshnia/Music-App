import { createSlice } from "@reduxjs/toolkit";
const musicApp = JSON.parse(localStorage.getItem("MusicApp")) || {};

const initialState = {
  isDarkMode: musicApp?.mode === "dark",
  isMedium: false,
  isMainScrolled: false,
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;

      const musicApp = JSON.parse(localStorage.getItem("MusicApp")) || {};

      localStorage.setItem(
        "MusicApp",
        JSON.stringify({
          ...musicApp,
          mode: state.isDarkMode ? "dark" : "light",
        }),
      );
    },
    setIsMedium(state, action) {
      state.isMedium = action.payload;
    },
    setIsMainScrolled(state, action) {
      state.isMainScrolled = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { toggleDarkMode, setIsMedium, setIsMainScrolled } =
  globalSlice.actions;
