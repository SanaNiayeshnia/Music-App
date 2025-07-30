import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlayingTrackbarOpen: false,
  isQueueBarOpen: false,
  isFullScreenPlayingTrackOpen: false,
  player: {},
  deviceId: null,
  trackInfo: {},
  paused: true,
  position: 0,
  duration: 0,
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
    setIsFullScreenPlayingTrack(state, action) {
      state.isFullScreenPlayingTrackOpen = action.payload;
    },
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
    setDeviceId: (state, action) => {
      state.deviceId = action.payload;
    },
    changePlayerState: (state, action) => {
      state.trackInfo = action.payload.trackInfo;
      state.paused = action.payload.paused;
      state.position = action.payload.position;
      state.duration = action.payload.duration;
    },
  },
});

export default playbackSlice.reducer;
export const {
  togglePlayingTrackBar,
  toggleQueueBar,
  setIsFullScreenPlayingTrack,
  setPlayer,
  setDeviceId,
  changePlayerState,
} = playbackSlice.actions;
