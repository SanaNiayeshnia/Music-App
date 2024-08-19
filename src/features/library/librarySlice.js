import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFilter: "",
  sortBy: "Type",
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
        if (action.payload !== "" && state.sortBy === "Type")
          state.sortBy = "A-Z";
      }

      // filter the items
      filteringFunc(state);
    },

    setSortBy(state, action) {
      state.sortBy = action.payload;
      filteringFunc(state);
    },

    setFollowedItems(state, action) {
      state.followedItems = action.payload;

      if (state.filteredItems.length === 0)
        state.filteredItems = state.followedItems;

      //apply filters on initial followedItems
      filteringFunc(state);
    },

    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      filteringFunc(state);
    },
  },
});

//reusable functions

function sortingFunc(state) {
  switch (state.sortBy) {
    case "A-Z": //sort alphabetical (a-z)
      state.filteredItems.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      break;
    case "Z-A": //sort alphabetical (z-a)
      state.filteredItems.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
      break;
    case "Type": //sort by type
    default:
      state.filteredItems.sort((a, b) => a.type.localeCompare(b.type)); //sorting items like this: album => artist => playlist
      break;
  }
}

function settingQueryFunc(state) {
  const pattern = new RegExp(state.searchQuery, "i");
  state.filteredItems = state.filteredItems.filter((item) =>
    pattern.test(item.name),
  );
}

function filteringFunc(state) {
  // filter the items based on the current filter
  state.filteredItems =
    state.currentFilter.length > 0
      ? state.followedItems.filter((item) => state.currentFilter === item.type)
      : state.followedItems;
  //sort items
  sortingFunc(state);
  //set search query
  settingQueryFunc(state);
}

export default librarySlice.reducer;
export const { addRemoveFilter, setSortBy, setFollowedItems, setSearchQuery } =
  librarySlice.actions;
