import { configureStore } from "@reduxjs/toolkit";
import playbackReducer from "./features/player/PlaybackSlice";
const store = configureStore({
  reducer: {
    playback: playbackReducer,
  },
});

export default store;
