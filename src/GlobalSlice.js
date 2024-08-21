import { createSlice } from "@reduxjs/toolkit";
import { APP_NAME } from "./utilities/constants";
const musicApp = JSON.parse(localStorage.getItem(APP_NAME)) || {};

const initialState = {
  isDarkMode: musicApp?.mode === "dark",
  isMedium: window.innerWidth < 1024,
  isSmall: window.innerWidth < 768,
  pageTitle: "",
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;

      const musicApp = JSON.parse(localStorage.getItem(APP_NAME)) || {};

      localStorage.setItem(
        APP_NAME,
        JSON.stringify({
          ...musicApp,
          mode: state.isDarkMode ? "dark" : "light",
        }),
      );
    },
    setIsMedium(state, action) {
      state.isMedium = action.payload;
    },
    setIsSmall(state, action) {
      state.isSmall = action.payload;
    },
    setPageTitle(state, action) {
      state.pageTitle = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { toggleDarkMode, setIsMedium, setPageTitle, setIsSmall } =
  globalSlice.actions;
