import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFiltersArray: [],
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
  },
});

export default librarySlice.reducer;
export const { addFilter, removeFilter } = librarySlice.actions;
