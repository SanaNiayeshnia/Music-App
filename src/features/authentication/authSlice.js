import { createSlice } from "@reduxjs/toolkit";
const musicApp = JSON.parse(localStorage.getItem("MusicApp")) || {};

const initialState = {
  accessToken: musicApp?.spotifyAccessToken || "",
  refreshToken: musicApp?.spotifyRefreshToken || "",
  expiresAt: musicApp?.expiresAt || 0,
  isAuthenticated: (musicApp?.expiresAt || 0) > Date.now(),
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

      const musicApp = JSON.parse(localStorage.getItem("MusicApp")) || {};

      const updatedMusicApp = {
        ...musicApp,
        spotifyAccessToken: state.accessToken,
        spotifyRefreshToken: state.refreshToken,
        expiresAt: state.expiresAt,
      };

      localStorage.setItem("MusicApp", JSON.stringify(updatedMusicApp));
    },
  },
});

export default authSlice.reducer;
export const { setAccessToken } = authSlice.actions;
