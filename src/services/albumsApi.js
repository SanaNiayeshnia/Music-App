import { APP_NAME } from "../utilities/constants";

//get requests
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

export async function checkUsersSavedAlbums(id) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch(
    `https://api.spotify.com/v1/me/albums/contains?ids=${id}`,
    {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to check if the album is saved!");
  const data = await res.json();
  return data[0];
}

//put requests
export async function saveAlbum(id) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch(`https://api.spotify.com/v1/me/albums?ids=${id}`, {
    method: "PUT",
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to save the album!");
}

//delete requests
export async function unsaveAlbum(id) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch(`https://api.spotify.com/v1/me/albums?ids=${id}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to unsave the album!");
}
