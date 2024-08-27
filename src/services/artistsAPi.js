import { getRequestHeader } from "../utilities/helper";

//get requests
export async function getFollowedArtists() {
  let url =
    "https://api.spotify.com/v1/me/following?type=artist&limit=50&locale=en_US";

  const res = await fetch(url, {
    headers: getRequestHeader(),
  });
  if (res.status !== 200)
    throw new Error("Failed to get the followed artists!");

  const data = await res.json();

  return {
    artists: data?.artists?.items,
    count: data?.artists?.total,
    next: data?.artists?.next,
  };
}

export async function getArtist(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/artists?ids=${id}&locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the artist info!");

  const data = await res.json();

  return data.artists[0];
}

export async function getArtistsDiscography(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&limit=50&locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the artist info!");

  const data = await res.json();

  return data?.items;
}

export async function getArtistsTopTracks(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the artist's top tracks!");
  const data = await res.json();

  return data?.tracks;
}

export async function getRelatedArtists(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/artists/${id}/related-artists?locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the related artists!");
  const data = await res.json();

  return data?.artists;
}

export async function getAppearsOn(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums?include_groups=appears_on&limit=50&locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the artist's appears on items!");
  const data = await res.json();

  return data?.items;
}

export async function checkUsersFollowedArtists(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/following/contains?type=artist&ids=${id}`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to check if the artist is being followed!");
  const data = await res.json();
  return data[0] || false;
}

//put requests
export async function followArtist(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/following?type=artist&ids=${id}`,
    {
      method: "PUT",
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 204) throw new Error("Failed to follow the artist!");
}

//delete requests
export async function unfollowArtist(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/following?type=artist&ids=${id}`,
    {
      method: "DELETE",
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 204) throw new Error("Failed to follow the artist!");
}
