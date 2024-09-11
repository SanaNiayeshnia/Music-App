import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFilter: "",
  sortBy: "",
  searchQuery: "",
  followedItems: [],
  filteredItems: [],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addRemoveFilter(state, action) {
      if (state.currentFilter === action.payload) {
        //remove filter if it already chosen as the current filter
        state.currentFilter = "";
      } else {
        //add filter
        state.currentFilter = action.payload;
      }
    },

    setSortBy(state, action) {
      state.sortBy = action.payload;
    },

    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export default librarySlice.reducer;
export const { addRemoveFilter, setSortBy, setFollowedItems, setSearchQuery } =
  librarySlice.actions;
