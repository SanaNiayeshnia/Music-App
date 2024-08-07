import { APP_NAME } from "../utilities/constants";

export async function getSavedAlbums() {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch("https://api.spotify.com/v1/me/albums?limit=50", {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to get the saved albums!");
  const data = await res.json();

  return {
    albums: data?.items?.map((item) => item.album),
    count: data?.total,
    next: data?.next,
  };
}

export async function getAlbum(id) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to get the album!");
  const data = await res.json();
  return data;
}
