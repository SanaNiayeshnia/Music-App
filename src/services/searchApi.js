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

export async function getSearchResult(query) {
  let controller = null;
  try {
    const accessToken = JSON.parse(
      localStorage.getItem("MusicApp"),
    ).spotifyAccessToken;

    if (controller) controller.abort();
    controller = new AbortController();
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track,album,artist,playlist&limit=6`,
      {
        signal: controller.signal,
        headers: { authorization: `Bearer ${accessToken}` },
      },
    );
    if (res.status !== 200)
      throw new Error("Failed to get the available genres!");
    const data = await res.json();
    const topResult =
      (data.artists.items[0].name.toLowerCase().startsWith(query) &&
        data.artists.items[0]) ||
      (data.tracks.items[0].name.toLowerCase().startsWith(query) &&
        data.tracks.items[0]) ||
      (data.albums.items[0].name.toLowerCase().startsWith(query) &&
        data.albums.items[0]) ||
      (data.playlists.items[0].name.toLowerCase().startsWith(query) &&
        data.playlists.items[0]) ||
      data.tracks.items[0];

    return { ...data, topResult };
  } catch (error) {
    if (error.name !== "AbortError") throw new Error(error.message);
  } finally {
    controller = null;
  }
}
