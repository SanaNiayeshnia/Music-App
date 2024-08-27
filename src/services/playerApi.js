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
  const allTracks = uniqueItemsArray.map((item) => item.track);
  if (all)
    return allTracks; //return all the individual tracks
  else {
    const hrefs = uniqueItemsArray
      .map((item) => item?.context?.href)
      .filter((item) => item); //only get the hrefs which are not a falsey value like null or undefined

    const hrefsSet = new Set(hrefs); //a set of context hrefs of recently played items (href of playlists/albums)
    let contextItems = await Promise.all(
      [...hrefsSet].map(async (href) => {
        //fetch each item data
        const itemRes = await fetch(href, {
          headers: getRequestHeader(),
        });

        if (itemRes.status !== 200) {
          throw new Error("Failed to get the recently played items!");
        }

        const itemData = await itemRes.json();

        return itemData;
      }),
    );

    //add items with no context (tracks)
    uniqueItemsArray.forEach(
      (item) =>
        item?.context === null &&
        (contextItems = [...contextItems, item.track]),
    );

    return contextItems;
  }
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
  if (playlistRes.status !== 200)
    throw new Error("Failed to get the currently playing track!");
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
  return data.item;
}
