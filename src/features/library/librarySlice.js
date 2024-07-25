import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFiltersArray: [],
  sortByIndex: 0,
};
const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addFilter(state, action) {
      state.currentFiltersArray = [
        ...state.currentFiltersArray,
        action.payload,
      ];
    },
    removeFilter(state, action) {
      state.currentFiltersArray = state.currentFiltersArray.filter(
        (filter) => filter !== action.payload,
      );
    },
    setSortByIndex(state, action) {
      state.sortByIndex = action.payload;
    },
  },
});

export default librarySlice.reducer;
export const { addFilter, removeFilter, setSortByIndex } = librarySlice.actions;
