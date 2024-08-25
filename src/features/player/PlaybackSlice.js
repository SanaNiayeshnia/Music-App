import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlayingTrackbarOpen: false,
  isQueueBarOpen: false,
  isFullScreenPlayingTrackOpen: false,
};
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
    toggleIsFullScreenPlayingTrack(state) {
      state.isFullScreenPlayingTrackOpen = !state.isFullScreenPlayingTrackOpen;
    },
  },
});

export default playbackSlice.reducer;
export const {
  togglePlayingTrackBar,
  toggleQueueBar,
  toggleIsFullScreenPlayingTrack,
} = playbackSlice.actions;
