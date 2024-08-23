import { configureStore } from "@reduxjs/toolkit";
import playbackReducer from "./features/player/PlaybackSlice";
import globalReducer from "./GlobalSlice";
import authReducer from "./features/authentication/authSlice";
import libraryReducer from "./features/library/librarySlice";
import searchReducer from "./features/searchAndDiscovery/searchSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    playback: playbackReducer,
    authentication: authReducer,
    library: libraryReducer,
    search: searchReducer,
  },
});

export default store;
