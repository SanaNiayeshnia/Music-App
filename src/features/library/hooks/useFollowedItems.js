import useSavedAlbums from "../../albums/hooks/useSavedAlbums";
import useFollowedArtists from "../../artists/hooks/useFollowedArtists";
import useSavedPlaylists from "../../playlists/hooks/useSavedPlaylists";
import { useSelector } from "react-redux";

function useFollowedItems() {
  const { isLoading: isLoadingArtists, followedArtists } = useFollowedArtists();
  const { isLoading: isLoadingAlbums, savedAlbums } = useSavedAlbums();
  const { isLoading: isLoadingPlaylists, savedPlaylists } = useSavedPlaylists();
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

  const isLoading = isLoadingAlbums || isLoadingPlaylists || isLoadingArtists;

  return {
    isLoading,
    followedItems,
    filteredItems: filteredItemsByQuery,
  };
}

export default useFollowedItems;
