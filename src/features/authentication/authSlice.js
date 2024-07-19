import { createSlice } from "@reduxjs/toolkit";
const musicApp = JSON.parse(localStorage.getItem("MusicApp"));
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

      localStorage.setItem(
        "MusicApp",
        JSON.stringify({
          spotifyAccessToken: action.payload.accessToken,
          spotifyRefreshToken: action.payload.refreshToken
            ? action.payload.refreshToken
            : state.refreshToken,
          expiresAt: action.payload.expiresAt,
          ...JSON.parse(localStorage.getItem("MusicApp")),
        }),
      );
    },
  },
});

export default authSlice.reducer;
export const { setAccessToken } = authSlice.actions;
