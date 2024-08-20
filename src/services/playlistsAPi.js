import { getRequestHeader } from "../utilities/helper";
import { getCurrentUser } from "./authenticationApi";
import { getUsersSavedTracks } from "./tracksApi";

//get requests
export async function getSavedPlaylists() {
  const res = await fetch("https://api.spotify.com/v1/me/playlists?limit=50", {
    headers: getRequestHeader(),
  });
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
    const res = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: getRequestHeader(),
    });
    if (res.status !== 200)
      throw new Error("Failed to get the saved playlists!");
    data = await res.json();
  }

  return data;
}

export async function getRelatedPlaylists(genre) {
  const res = await fetch(
    `https://api.spotify.com/v1/search?query=genre:"${genre}"&type=playlist&limit=50`,
    {
      headers: getRequestHeader(),
    },
  );
  if (res.status !== 200) throw new Error("Failed to get the saved playlists!");
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
    `https://api.spotify.com/v1/browse/featured-playlists?limit=50`,
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
    images: [{ url: "/heart-folder.jpg" }],
  };

  return likedSongsPlaylist;
}

//put requests
export async function savePlaylist(id) {
  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${id}/followers`,
    { method: "PUT", headers: getRequestHeader() },
  );
  if (res.status !== 200) throw new Error("Failed to save the playlist!");
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
export async function createPlaylist({ userId, playlistName }) {
  const res = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      method: "POST",
      headers: { ...getRequestHeader(), "Content-Type": "application/json" },
      body: JSON.stringify({ name: playlistName }),
    },
  );
  if (res.status !== 201) throw new Error("Failed to create the playlist!");
  const data = await res.json();
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
