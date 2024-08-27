import { getRequestHeader } from "../utilities/helper";

export async function getUser(id) {
  const res = await fetch(`https://api.spotify.com/v1/users/${id}`, {
    headers: getRequestHeader(),
  });
  if (res.status !== 200) throw new Error("Failed to get the user info!");
  const data = await res.json();
  return data;
}

export async function getUsersTopTracks() {
  const res = await fetch(
    `https://api.spotify.com/v1/me/top/tracks?limit=50&locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the user's top tracks!");
  const data = await res.json();
  return data?.items;
}

export async function getUsersTopArtists() {
  const res = await fetch(
    `https://api.spotify.com/v1/me/top/artists?limit=50&locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the user's top artists!");
  const data = await res.json();
  return data?.items;
}
