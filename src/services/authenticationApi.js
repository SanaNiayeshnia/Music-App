import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../utilities/constants";

export async function getAccessToken(code) {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
      code,
    }).toString(),
  });
  if (res.status !== 200) throw new Error("Authentication failed!");
  const data = await res.json();
  return { ...data, expiresAt: Date.now() + data.expires_in * 1000 };
}

export async function refreshAccessToken(refresh_token) {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }).toString(),
  });
  if (res.status !== 200) throw new Error("Authentication failed!");
  const data = await res.json();
  return { ...data, expiresAt: Date.now() + data.expires_in * 1000 };
}

export async function getUser() {
  const accessToken = JSON.parse(
    localStorage.getItem("MusicApp"),
  ).spotifyAccessToken;
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to get the user info!");
  const data = await res.json();
  return data;
}
