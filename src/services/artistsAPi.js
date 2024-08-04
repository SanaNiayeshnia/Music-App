export async function getFollowedArtists() {
  const accessToken = JSON.parse(
    localStorage.getItem("MusicApp"),
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
    localStorage.getItem("MusicApp"),
  ).spotifyAccessToken;

  const res = await fetch(`https://api.spotify.com/v1/artists?ids=${id}`, {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to get the artist info!");

  const data = await res.json();

  return data.artists[0];
}
