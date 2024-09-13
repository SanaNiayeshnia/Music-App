import { getRequestHeader } from "../utilities/helper";

export async function getAvailableGenres() {
  const res = await fetch(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds?locale=en_US",
    { headers: getRequestHeader() },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the available genres!");
  const data = await res.json();

  //get one playlist per genre for genre image cover
  const genres = await Promise.all(
    data.genres.map(async (genreName) => {
      const genreRes = await fetch(
        `https://api.spotify.com/v1/search?q=genre:"${genreName}"&type=playlist&limit=2&locale=en_US`,
        { headers: getRequestHeader() },
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

export async function getCategories() {
  const res = await fetch(
    "https://api.spotify.com/v1/browse/categories?locale=en_US&limit=50",
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the categories!");
  const data = await res.json();
  return data?.categories?.items;
}

export async function getCategory(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/browse/categories/${id}?locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the category!");
  const data = await res.json();
  return data;
}

export async function getSearchResult(query) {
  let controller = null;
  try {
    if (controller) controller.abort();
    controller = new AbortController();

    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track,album,artist,playlist&limit=30&locale=en_US`,
      {
        signal: controller.signal,
        headers: getRequestHeader(),
      },
    );
    if (res.status !== 200)
      throw new Error("Failed to get the available genres!");
    const data = await res.json();
    const topResult =
      (data?.artists?.items[0]?.name.toLowerCase().startsWith(query) &&
        data?.artists?.items[0]) ||
      (data?.tracks?.items[0]?.name.toLowerCase().startsWith(query) &&
        data?.tracks?.items[0]) ||
      (data?.albums?.items[0]?.name.toLowerCase().startsWith(query) &&
        data?.albums?.items[0]) ||
      (data?.playlists?.items[0]?.name.toLowerCase().startsWith(query) &&
        data?.playlists?.items[0]) ||
      data?.tracks?.items[0];

    if (!topResult) throw new Error("Couldn't find anything relatable!");

    return { ...data, topResult };
  } catch (error) {
    if (error.name !== "AbortError") throw new Error(error.message);
  } finally {
    controller = null;
  }
}
