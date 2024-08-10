import { APP_NAME } from "../utilities/constants";

export async function getFollowedArtists() {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;
  let url = "https://api.spotify.com/v1/me/following?type=artist&limit=50";

  const res = await fetch(url, {
    headers: { authorization: `Bearer ${accessToken}` },
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
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;

  const res = await fetch(`https://api.spotify.com/v1/artists?ids=${id}`, {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to get the artist info!");

  const data = await res.json();

  return data.artists[0];
}

export async function getArtistsDiscography(id) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;

  const res = await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single,compilation&limit=50`,
    {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the artist info!");

  const data = await res.json();

  return data?.items;
}

export async function getArtistsTopTracks(id) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;

  const res = await fetch(
    `https://api.spotify.com/v1/artists/${id}/top-tracks`,
    {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the artist's top tracks!");
  const data = await res.json();

  return data?.tracks;
}

export async function getRelatedArtists(id) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;

  const res = await fetch(
    `https://api.spotify.com/v1/artists/${id}/related-artists`,
    {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the related artists!");
  const data = await res.json();

  return data?.artists;
}

export async function getAppearsOn(id) {
  const accessToken = JSON.parse(
    localStorage.getItem(APP_NAME),
  ).spotifyAccessToken;

  const res = await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums?include_groups=appears_on&limit=50`,
    {
      headers: { authorization: `Bearer ${accessToken}` },
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the artist's appears on items!");
  const data = await res.json();

  return data?.items;
}
