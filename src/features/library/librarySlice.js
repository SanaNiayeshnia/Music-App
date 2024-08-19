import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFilter: "",
  sortByIndex: 0,
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

      // filter the items
      filteringFunc(state);
    },

    setSortByIndex(state, action) {
      state.sortByIndex = action.payload;
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
  switch (state.sortByIndex) {
    case 1: //sort alphabetical (a-z)
      state.filteredItems.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      break;
    case 2: //sort alphabetical (z-a)
      state.filteredItems.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
      break;
    case 0: //sort by type
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
export const {
  addRemoveFilter,
  setSortByIndex,
  setFollowedItems,
  setSearchQuery,
} = librarySlice.actions;
