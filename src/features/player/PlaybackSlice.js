import { createSlice } from "@reduxjs/toolkit";

const initialState = { isPlayingTrackbarOpen: false };
const playbackSlice = createSlice({
  name: "playback",
  initialState,
  reducers: {
    togglePlayingTrackBar(state) {
      state.isPlayingTrackbarOpen = !state.isPlayingTrackbarOpen;
    },
  },
});

export default playbackSlice.reducer;
export const { togglePlayingTrackBar } = playbackSlice.actions;
