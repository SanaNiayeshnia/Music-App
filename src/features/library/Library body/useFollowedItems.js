import { useEffect, useState } from "react";
import useSavedAlbums from "../../albums/useSavedAlbums";
import useFollowedArtists from "../../artists/useFollowedArtists";
import useSavedPlaylists from "../../playlists/useSavedPlaylists";

function useFollowedItems() {
  const { isLoading: isLoadingArtists, followedArtists } = useFollowedArtists();
  const { isLoading: isLoadingAlbums, savedAlbums } = useSavedAlbums();
  const { isLoading: isLoadingPlaylists, savedPlaylists } = useSavedPlaylists();
  const [followedItems, setFollowedItems] = useState([]);
  useEffect(() => {
    const items = [
      ...(followedArtists || []),
      ...(savedAlbums || []),
      ...(savedPlaylists || []),
    ];
    setFollowedItems(items);
  }, [followedArtists, savedAlbums, savedPlaylists]);
  const isLoading = isLoadingAlbums || isLoadingPlaylists || isLoadingArtists;
  return { isLoading, followedItems };
}

export default useFollowedItems;
