import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFilterArray: [],
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
    },
    setFollowedItems(state, action) {
      state.followedItems = action.payload;
    },
  },
});

export default librarySlice.reducer;
export const { addRemoveFilter, setSortByIndex, setFollowedItems } =
  librarySlice.actions;
