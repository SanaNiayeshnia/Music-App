import { getRequestHeader } from "../utilities/helper";

//get requests
export async function getTrack(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/tracks/${id}?locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the track!");
  const data = await res.json();
  return data;
}

export async function getRecommendations(trackId) {
  const res = await fetch(
    `https://api.spotify.com/v1/recommendations?seed_tracks=${trackId}&limit=10&locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the recommendations!");
  const data = await res.json();
  return data?.tracks;
}

export async function checkUsersSavedTracks(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/tracks/contains?ids=${id}`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to check if the track is saved!");
  const data = await res.json();
  console.log(data);
  return data?.at(0);
}

export async function getUsersSavedTracks({ pageParam: nextUrl }) {
  const url =
    nextUrl || `https://api.spotify.com/v1/me/tracks?limit=25&locale=en_US`;
  const res = await fetch(url, {
    headers: getRequestHeader(),
  });
  if (res.status !== 200)
    throw new Error("Failed to get the user's saved tracks!");
  const data = await res.json();
  return data;
}

//put requests

export async function saveTrack(id) {
  const res = await fetch(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
    method: "PUT",
    headers: getRequestHeader(),
  });
  if (res.status !== 200) throw new Error("Failed to save the track!");
}

//delete requests

export async function unsaveTrack(id) {
  const res = await fetch(`https://api.spotify.com/v1/me/tracks?ids=${id}`, {
    method: "DELETE",
    headers: getRequestHeader(),
  });
  if (res.status !== 200) throw new Error("Failed to delete the track!");
}
