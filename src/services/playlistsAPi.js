import { getRequestHeader } from "../utilities/helper";
import { getCurrentUser } from "./authenticationApi";
import { getUsersSavedTracks } from "./tracksApi";
import imageCompression from "browser-image-compression";

//get requests
export async function getSavedPlaylists() {
  const res = await fetch(
    "https://api.spotify.com/v1/me/playlists?limit=50&locale=en_US",
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the saved playlists!");
  const data = await res.json();

  //add likedSongsPlaylist to the saved playlists
  const likedSongsPlaylist = await getLikedSongsPlaylist();
  const allSavedPlaylists = [...data?.items, likedSongsPlaylist];

  return { playlists: allSavedPlaylists, count: data?.total, next: data?.next };
}

export async function getPlaylist(id) {
  let data;
  if (id === "LikedSongs") data = await getLikedSongsPlaylist();
  else {
    const res = await fetch(
      `https://api.spotify.com/v1/playlists/${id}?locale=en_US`,
      {
        headers: getRequestHeader(),
      },
    );
    if (res.status !== 200) throw new Error("Failed to get the playlist!");
    data = await res.json();
  }

  return data;
}

export async function getPlaylistItems({ pageParam = null, playlistId }) {
  const url =
    pageParam ||
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=15`;

  const res = await fetch(url, {
    headers: getRequestHeader(),
  });
  if (res.status !== 200) throw new Error("Failed to get the playlist items!");
  const data = await res.json();
  return data;
}

export async function getRelatedPlaylists(genre) {
  const res = await fetch(
    `https://api.spotify.com/v1/search?query=genre:"${genre}"&type=playlist&limit=50&locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the related playlists!");
  const data = await res.json();
  return data?.playlists?.items;
}

export async function checkUsersSavedPlaylists(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${id}/followers/contains`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to check if the playlist is saved!");
  const data = await res.json();
  return data[0];
}

export async function getFeaturedPlaylists() {
  const res = await fetch(
    `https://api.spotify.com/v1/browse/featured-playlists?limit=50&locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to check if the playlist is saved!");
  const data = await res.json();
  return data?.playlists?.items;
}

export async function getLikedSongsPlaylist() {
  const { items: likedSongsPlaylistTracks, total } =
    await getUsersSavedTracks();
  const user = await getCurrentUser();
  const likedSongsPlaylist = {
    tracks: { items: [...likedSongsPlaylistTracks], total },
    type: "playlist",
    name: "Liked Songs",
    public: false,
    id: "LikedSongs",
    owner: { id: user.id, display_name: user.display_name, type: "user" },
    images: [{ url: "/images/covers/heart-folder.jpg" }],
  };

  return likedSongsPlaylist;
}

export async function getCategorysPlaylists(id) {
  const res = await fetch(
    `
    https://api.spotify.com/v1/browse/categories/${id}/playlists?locale=en_US`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the category's playlists!");
  const data = await res.json();
  return data?.playlists?.items;
}

//put requests
export async function savePlaylist(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${id}/followers`,
    { method: "PUT", headers: getRequestHeader() },
  );
  if (res.status !== 200) throw new Error("Failed to save the playlist!");
}

export async function addPlaylistCover({ playlistId, image }) {
  let imgFile = image;
  if (image.size > 256 * 1024) {
    const options = {
      maxSizeMB: 0.25, // Maximum size in MB
      maxWidthOrHeight: 1024, // Max width or height in pixels
      useWebWorker: true, // Use web workers for faster compression
    };
    imgFile = await imageCompression(image, options);
  }
  const reader = new FileReader();
  reader.readAsDataURL(imgFile);
  reader.onload = async () => {
    const base64Image = reader.result.split(",")[1];
    const res = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/images`,
      {
        method: "PUT",
        headers: { ...getRequestHeader(), "Content-Type": "image/jpeg" },
        body: base64Image,
      },
    );
    if (res.status !== 202)
      throw new Error("Failed to add playlist cover image!");
  };
}

export async function editPlaylist({ playlistId, name, image }) {
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      method: "PUT",
      headers: { ...getRequestHeader(), "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    },
  );
  if (res.status !== 200) throw new Error("Failed to update the playlist!");
  if (image) {
    await addPlaylistCover({ playlistId, image });
  }
}

//delete requests
export async function unsavePlaylist(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${id}/followers`,
    { method: "DELETE", headers: getRequestHeader() },
  );
  if (res.status !== 200) throw new Error("Failed to unsave the playlist!");
}

export async function removeItemsFromPlaylist({ playlistId, itemUris }) {
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "DELETE",
      headers: getRequestHeader(),
      body: JSON.stringify({ tracks: itemUris }),
    },
  );
  if (res.status !== 200)
    throw new Error("Failed to remove items from the playlist!");
  const data = await res.json();
  return data;
}

//post requests
export async function createPlaylist({ userId, name, image }) {
  const res = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      method: "POST",
      headers: { ...getRequestHeader(), "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    },
  );
  if (res.status !== 201) throw new Error("Failed to create the playlist!");
  const data = await res.json();
  if (image) await addPlaylistCover({ playlistId: data?.id, image });
  return data;
}

export async function addItemsToPlaylist({ playlistId, itemUris }) {
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "POST",
      headers: { ...getRequestHeader(), "Content-Type": "application/json" },
      body: JSON.stringify({ uris: itemUris }),
    },
  );
  if (res.status !== 201)
    throw new Error("Failed to add items to the playlist!");
  const data = await res.json();
  return data;
}
