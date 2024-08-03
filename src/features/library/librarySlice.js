import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFilterArray: ["artist", "playlist", "album"],
  sortByIndex: 0,
  followedItems: [],
  filteredItems: [],
};
const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addRemoveFilter(state, action) {
      if (state.currentFilterArray.includes(action.payload)) {
        //remove filter if it already exists in the current filter array
        state.currentFilterArray = state.currentFilterArray.filter(
          (filter) => filter !== action.payload,
        );
      } else {
        //add filter
        state.currentFilterArray = [
          ...state.currentFilterArray,
          action.payload,
        ];
      }

      // filter the items based on the current filter array
      state.filteredItems =
        state.currentFilterArray.length > 0
          ? state.followedItems.filter((item) =>
              state.currentFilterArray.includes(item.type),
            )
          : state.followedItems;
    },
    setSortByIndex(state, action) {
      state.sortByIndex = action.payload;
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
    },
    setFollowedItems(state, action) {
      state.followedItems = action.payload;

      if (state.filteredItems.length === 0)
        state.filteredItems = state.followedItems;

      //apply filters on initial followedItems
      state.filteredItems =
        state.currentFilterArray.length > 0
          ? state.followedItems.filter((item) =>
              state.currentFilterArray.includes(item.type),
            )
          : state.followedItems;

      //apply sorting by type
      state.filteredItems.sort((a, b) => a.type.localeCompare(b.type));
    },
  },
});

export default librarySlice.reducer;
export const { addRemoveFilter, setSortByIndex, setFollowedItems } =
  librarySlice.actions;
