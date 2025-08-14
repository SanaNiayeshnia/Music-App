import { getRequestHeader } from "../utilities/helper";

export async function getRecentlyPlayed(all = false) {
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=50&locale=en_US",
    { headers: getRequestHeader() },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the recently played items!");
  const data = await res.json(); //list of individual tracks that has been played

  const uniqueItemsMap = new Map();
  data?.items?.forEach((item) => {
    if (!uniqueItemsMap.has(item.track.id)) {
      uniqueItemsMap.set(item.track.id, item);
    }
  });
  const uniqueItemsArray = Array.from(uniqueItemsMap.values());

  const allTracks = uniqueItemsArray.map((item) => {
    return { ...item?.track, context: item?.context };
  });

  return allTracks;
}

export async function getCurrentlyPlaingTrack() {
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    { headers: getRequestHeader() },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the currently playing track!");
  const data = await res.json();
  let context = { type: data?.context?.type };
  const playlistRes = await fetch(data?.context?.href, {
    headers: getRequestHeader(),
  });
  const playlistData = await playlistRes.json();
  context = { ...context, name: playlistData?.name, id: playlistData?.id };
  return { ...data?.item, context };
}

export async function getQueue() {
  const res = await fetch("https://api.spotify.com/v1/me/player/queue", {
    headers: getRequestHeader(),
  });
  if (res.status !== 200) throw new Error("Failed to get the queue!");
  const data = await res.json();
  console.log(data);
  return data;
}

export async function play({ uri, deviceId }) {
  console.log("deviceId", deviceId);
  try {
    const res = await fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: getRequestHeader(),
      body: JSON.stringify({
        device_id: deviceId,
        ...(uri.includes("track") ? { uris: [uri] } : { context_uri: uri }),
      }),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        errorData?.error?.reason === "PREMIUM_REQUIRED"
          ? "You need to have a premium account in order to play a song!"
          : "You can't play tracks currently!",
      );
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function repeat({ state, deviceId }) {
  try {
    const res = await fetch("https://api.spotify.com/v1/me/player/repeat", {
      method: "PUT",
      headers: getRequestHeader(),
      body: JSON.stringify({
        device_id: deviceId,
        state,
      }),
    });
    if (!res.ok) {
      throw new Error("something went wrong!");
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function toggleShuffle({ state, deviceId }) {
  try {
    const res = await fetch("https://api.spotify.com/v1/me/player/shuffle", {
      method: "PUT",
      headers: getRequestHeader(),
      body: JSON.stringify({
        device_id: deviceId,
        state,
      }),
    });
    if (!res.ok) {
      throw new Error("something went wrong!");
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function transferPlaybackToThisDevice({
  accessToken,
  deviceId,
  player,
}) {
  try {
    await fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ device_ids: [deviceId], play: true }),
    });
    const s = await player.getCurrentState();
    console.log("Initial state:", s);
  } catch (e) {
    console.error("Failed to transfer/start playback:", e);
  }
}
