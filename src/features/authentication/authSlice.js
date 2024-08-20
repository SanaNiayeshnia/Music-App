import { createSlice } from "@reduxjs/toolkit";
import { APP_NAME } from "../../utilities/constants";
const musicApp = JSON.parse(localStorage.getItem(APP_NAME)) || {};

const initialState = {
  accessToken: musicApp?.spotifyAccessToken || "",
  refreshToken: musicApp?.spotifyRefreshToken || "",
  expiresAt: musicApp?.expiresAt || 0,
  isAuthenticated: (musicApp?.expiresAt || 0) > Date.now(),
  isOnLine: navigator.onLine,
  user: {},
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken
        ? action.payload.refreshToken
        : state.refreshToken;
      state.expiresAt = action.payload.expiresAt;
      state.isAuthenticated = action.payload.expiresAt > Date.now();

      const musicApp = JSON.parse(localStorage.getItem(APP_NAME)) || {};

      const updatedMusicApp = {
        ...musicApp,
        spotifyAccessToken: state.accessToken,
        spotifyRefreshToken: state.refreshToken,
        expiresAt: state.expiresAt,
      };

      localStorage.setItem(APP_NAME, JSON.stringify(updatedMusicApp));
    },

    setIsOnline(state, action) {
      state.isOnLine = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logoutAccount(state) {
      localStorage.removeItem(APP_NAME);
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.expiresAt = null;
    },
  },
});

export default authSlice.reducer;
export const { setAccessToken, setIsOnline, logoutAccount, setUser } =
  authSlice.actions;
