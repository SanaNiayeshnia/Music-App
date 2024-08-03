export async function getAvailableGenres() {
  const accessToken = JSON.parse(
    localStorage.getItem("MusicApp"),
  ).spotifyAccessToken;
  const res = await fetch(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds",
    { headers: { authorization: `Bearer ${accessToken}` } },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the available genres!");
  const data = await res.json();

  //get one playlist per genre for genre image cover
  const genres = await Promise.all(
    data.genres.map(async (genreName) => {
      const genreRes = await fetch(
        `https://api.spotify.com/v1/search?q=genre:"${genreName}"&type=playlist&limit=2`,
        { headers: { authorization: `Bearer ${accessToken}` } },
      );
      if (genreRes.status !== 200)
        throw new Error("Failed to get the available genres!");
      const genreData = await genreRes.json();
      return {
        name: genreName,
        cover: genreData?.playlists?.items[0]?.images[0]?.url,
      };
    }),
  );
  return genres;
}
