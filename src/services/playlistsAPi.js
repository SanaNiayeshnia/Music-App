export async function getSavedPlaylists() {
  const accessToken = JSON.parse(
    localStorage.getItem("MusicApp"),
  ).spotifyAccessToken;
  const res = await fetch("https://api.spotify.com/v1/me/playlists", {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  if (res.status !== 200) throw new Error("Failed to get the saved playlists!");
  const data = await res.json();

  return { playlists: data?.items, count: data?.total, next: data?.next };
}
