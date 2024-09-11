import { useEffect } from "react";
import useSavedAlbums from "../../albums/hooks/useSavedAlbums";
import useFollowedArtists from "../../artists/hooks/useFollowedArtists";
import useSavedPlaylists from "../../playlists/hooks/useSavedPlaylists";
import { useSelector } from "react-redux";

function useFollowedItems() {
  const {
    isLoading: isLoadingArtists,
    followedArtists,
    hasNextPage: hasNextArtistPage,
    fetchNextPage: fetchNextArtist,
  } = useFollowedArtists();
  const {
    isLoading: isLoadingAlbums,
    savedAlbums,
    hasNextPage: hasNextAlbumPage,
    fetchNextPage: fetchNextALbum,
  } = useSavedAlbums();
  const {
    isLoading: isLoadingPlaylists,
    savedPlaylists,
    hasNextPage: hasNextPlaylistPage,
    fetchNextPage: fetchNextPlaylist,
  } = useSavedPlaylists();
  const { currentFilter, sortBy, searchQuery } = useSelector(
    (store) => store.library,
  );

  const followedItems = [...followedArtists, ...savedAlbums, ...savedPlaylists];
  //filter items by their type
  const filteredItemsByType = currentFilter
    ? followedItems?.filter((item) => item.type === currentFilter)
    : followedItems;
  //sort items
  const sortedItems = filteredItemsByType.sort((a, b) => {
    return sortBy === "A-Z"
      ? a.name.localeCompare(b.name)
      : sortBy === "Z-A"
        ? b.name.localeCompare(a.name)
        : "";
  });
  //filter items by the search query string
  const pattern = new RegExp(searchQuery, "i");
  const filteredItemsByQuery = sortedItems.filter((item) =>
    pattern.test(item.name),
  );

  useEffect(() => {
    //fetch artists till there are no more
    if (hasNextArtistPage) fetchNextArtist();
  }, [hasNextArtistPage, fetchNextArtist]);

  useEffect(() => {
    //fetch albums till there are no more

    if (hasNextAlbumPage) fetchNextALbum();
  }, [hasNextAlbumPage, fetchNextALbum]);

  useEffect(() => {
    //fetch playlists till there are no more
    if (hasNextPlaylistPage) fetchNextPlaylist();
  }, [hasNextPlaylistPage, fetchNextPlaylist]);

  const isLoading = isLoadingAlbums || isLoadingPlaylists || isLoadingArtists;

  return {
    isLoading,
    followedItems,
    filteredItems: filteredItemsByQuery,
  };
}

export default useFollowedItems;
