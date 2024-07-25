import { configureStore } from "@reduxjs/toolkit";
import playbackReducer from "./features/player/PlaybackSlice";
import globalReducer from "./GlobalSlice";
import authReducer from "./features/authentication/authSlice";
import libraryReducer from "./features/library/librarySlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    playback: playbackReducer,
    authentication: authReducer,
    library: libraryReducer,
  },
});

export default store;
