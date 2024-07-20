import { createSlice } from "@reduxjs/toolkit";

const initialState = { isPlayingTrackbarOpen: false, isQueueBarOpen: false };
const playbackSlice = createSlice({
  name: "playback",
  initialState,
  reducers: {
    togglePlayingTrackBar(state) {
      if (state.isQueueBarOpen) state.isQueueBarOpen = false;
      else state.isPlayingTrackbarOpen = !state.isPlayingTrackbarOpen;
    },
    toggleQueueBar(state) {
      state.isPlayingTrackbarOpen = true;
      state.isQueueBarOpen = !state.isQueueBarOpen;
    },
  },
});

export default playbackSlice.reducer;
export const { togglePlayingTrackBar, toggleQueueBar } = playbackSlice.actions;
