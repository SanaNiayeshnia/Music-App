import { getRequestHeader } from "../utilities/helper";

//get requests
export async function getSavedAlbums({ pageParam: nextUrl }) {
  const url =
    nextUrl || "https://api.spotify.com/v1/me/albums?limit=30&locale=en_US";

  const res = await fetch(url, {
    headers: getRequestHeader(),
  });
  if (res.status !== 200) throw new Error("Failed to get the saved albums!");
  const data = await res.json();

  return {
    albums: data?.items?.map((item) => item.album),
    count: data?.total,
    next: data?.next,
  };
}

export async function getAlbum(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/albums/${id}?locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the album!");
  const data = await res.json();
  return data;
}

export async function checkUsersSavedAlbums(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/albums/contains?ids=${id}`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to check if the album is saved!");
  const data = await res.json();
  return data[0];
}

export async function getNewReleases() {
  const res = await fetch(
    `https://api.spotify.com/v1/browse/new-releases?limit=50&locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the new releases!");
  const data = await res.json();
  return data?.albums?.items;
}

//put requests
export async function saveAlbum(id) {
  const res = await fetch(`https://api.spotify.com/v1/me/albums?ids=${id}`, {
    method: "PUT",
    headers: getRequestHeader(),
  });
  if (res.status !== 200) throw new Error("Failed to save the album!");
}

//delete requests
export async function unsaveAlbum(id) {
  const res = await fetch(`https://api.spotify.com/v1/me/albums?ids=${id}`, {
    method: "DELETE",
    headers: getRequestHeader(),
  });
  if (res.status !== 200) throw new Error("Failed to unsave the album!");
}
