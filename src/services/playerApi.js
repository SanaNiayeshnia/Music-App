export async function getRecentlyPlayed() {
  const accessToken = JSON.parse(
    localStorage.getItem("MusicApp"),
  ).spotifyAccessToken;
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=50",
    { headers: { authorization: `Bearer ${accessToken}` } },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the recently played items!");
  const data = await res.json(); //list of individual tracks that has been played

  const hrefs = data?.items
    .map((item) => item?.context?.href)
    .filter((item) => item); //only get the hrefs which are not a falsey value like null or undefined

  const hrefsSet = new Set(hrefs); //a set of context hrefs of recently played items (href of playlists/albums)
  let items = await Promise.all(
    [...hrefsSet].map(async (href) => {
      //fetch each item data
      const itemRes = await fetch(href, {
        headers: { authorization: `Bearer ${accessToken}` },
      });

      if (itemRes.status !== 200) {
        throw new Error("Failed to get the recently played items!");
      }

      const itemData = await itemRes.json();

      return itemData;
    }),
  );

  //add items with no context (tracks)
  data?.items.map(
    (item) => item?.context === null && (items = [...items, item.track]),
  );

  return items;
}

export async function getCurrentlyPlaingTrack() {
  const accessToken = JSON.parse(
    localStorage.getItem("MusicApp"),
  ).spotifyAccessToken;
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    { headers: { authorization: `Bearer ${accessToken}` } },
  );
  if (res.status !== 200)
    throw new Error("Failed to get the currently playing track!");
  const data = await res.json();
  return data.item;
}
