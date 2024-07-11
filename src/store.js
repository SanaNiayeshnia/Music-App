import { configureStore } from "@reduxjs/toolkit";
import playbackReducer from "./features/player/PlaybackSlice";
import globalReducer from "./GlobalSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    playback: playbackReducer,
  },
});

export default store;
