import { createSlice } from "@reduxjs/toolkit";
const searchParams = new URLSearchParams(window.location.search);
const initialState = { query: searchParams.get("q") || "" };
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;
