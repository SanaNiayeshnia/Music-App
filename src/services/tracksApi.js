import { APP_NAME } from "../utilities/constants";

export async function getTrack(id) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to get the track!");
  const data = await res.json();
  return data;
}

export async function getRecommendations(trackId) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch(
    `https://api.spotify.com/v1/recommendations?seed_tracks=${trackId}&limit=10`,
    {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the recommendations!");
  const data = await res.json();
  return data?.tracks;
}

export async function checkUsersSavedTracks(id) {
  console.log(id);
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  const res = await fetch(
    `https://api.spotify.com/v1/me/tracks/contains?ids=${id}`,
    {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to check if the track is saved!");
  const data = await res.json();
  return data;
}
