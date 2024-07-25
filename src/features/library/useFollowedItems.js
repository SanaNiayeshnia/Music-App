import { useEffect, useState } from "react";
import useSavedAlbums from "../albums/useSavedAlbums";
import useFollowedArtists from "../artists/useFollowedArtists";
import useSavedPlaylists from "../playlists/useSavedPlaylists";
import { useSelector } from "react-redux";

function useFollowedItems() {
  const { isLoading: isLoadingArtists, followedArtists } = useFollowedArtists();
  const { isLoading: isLoadingAlbums, savedAlbums } = useSavedAlbums();
  const { isLoading: isLoadingPlaylists, savedPlaylists } = useSavedPlaylists();
  const [followedItems, setFollowedItems] = useState([]);
  const { currentFiltersArray } = useSelector((store) => store.library);

  useEffect(() => {
    //put all the followed items into a single array
    const items = [
      ...(followedArtists || []),
      ...(savedAlbums || []),
      ...(savedPlaylists || []),
    ];

    //filter items
    const filteredItems =
      currentFiltersArray.length > 0
        ? items.filter((item) => currentFiltersArray.includes(item.type))
        : items;
    items.filter((item) => item.type === currentFiltersArray);

    setFollowedItems(filteredItems);
  }, [followedArtists, savedAlbums, savedPlaylists, currentFiltersArray]);

  const isLoading = isLoadingAlbums || isLoadingPlaylists || isLoadingArtists;

  return { isLoading, followedItems };
}

export default useFollowedItems;
