export async function getFollowedArtists() {
  const accessToken = JSON.parse(
    localStorage.getItem("MusicApp"),
  ).spotifyAccessToken;
  let url = "https://api.spotify.com/v1/me/following?type=artist&limit=2";
  let allArtists = [];

  //fetch till it reaces the end and there's no more artist items
  while (url) {
    const res = await fetch(url, {
      headers: { authorization: `Bearer ${accessToken}` },
    });
    if (res.status !== 200)
      throw new Error("Failed to get the followed artists!");

    const data = await res.json();
    allArtists = [...allArtists, ...data?.artists.items];
    url = data?.artists?.next;
  }

  return allArtists;
}
