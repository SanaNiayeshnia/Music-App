import { APP_NAME } from "../utilities/constants";

export async function getSavedPlaylists() {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch("https://api.spotify.com/v1/me/playlists?limit=50", {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to get the saved playlists!");
  const data = await res.json();

  return { playlists: data?.items, count: data?.total, next: data?.next };
}

export async function getPlaylist(id) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to get the saved playlists!");
  const data = await res.json();
  return data;
}

export async function getRelatedPlaylists(genre) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch(
    `https://api.spotify.com/v1/search?query=genre:"${genre}"&type=playlist&limit=50`,
    {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the saved playlists!");
  const data = await res.json();
  return data?.playlists?.items;
}
