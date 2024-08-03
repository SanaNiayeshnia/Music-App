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
  const data = await res.json();

  const hrefs = data?.items
    .map((item) => item?.context?.href)
    .filter((item) => item);

  const hrefsSet = new Set(hrefs);
  const items = await Promise.all(
    [...hrefsSet].map(async (href) => {
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
