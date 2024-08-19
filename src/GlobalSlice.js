import { createSlice } from "@reduxjs/toolkit";
import { APP_NAME } from "./utilities/constants";
const musicApp = JSON.parse(localStorage.getItem(APP_NAME)) || {};

const initialState = {
  isDarkMode: musicApp?.mode === "dark",
  isMedium: false,
  sectionPageTitle: "",
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
    setSectionPageTitle(state, action) {
      state.sectionPageTitle = action.payload;
    },
  },
});

export default globalSlice.reducer;
export const { toggleDarkMode, setIsMedium, setSectionPageTitle } =
  globalSlice.actions;
