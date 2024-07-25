export async function getFollowedArtists() {
  const accessToken = JSON.parse(
    localStorage.getItem("MusicApp"),
  ).spotifyAccessToken;
  let url = "https://api.spotify.com/v1/me/following?type=artist";

  const res = await fetch(url, {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200)
    throw new Error("Failed to get the followed artists!");

  const data = await res.json();

  return data;
}
