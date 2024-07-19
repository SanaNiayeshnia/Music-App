import { configureStore } from "@reduxjs/toolkit";
import playbackReducer from "./features/player/PlaybackSlice";
import globalReducer from "./GlobalSlice";
import authReducer from "./features/authentication/authSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    playback: playbackReducer,
    authentication: authReducer,
  },
});

export default store;
