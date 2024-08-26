import { useEffect } from "react";
import useSavedAlbums from "../../albums/hooks/useSavedAlbums";
import useFollowedArtists from "../../artists/hooks/useFollowedArtists";
import useSavedPlaylists from "../../playlists/hooks/useSavedPlaylists";
import { useDispatch, useSelector } from "react-redux";
import { setFollowedItems } from "../librarySlice";

function useFollowedItems() {
  const { isLoading: isLoadingArtists, followedArtists } = useFollowedArtists();
  const { isLoading: isLoadingAlbums, savedAlbums } = useSavedAlbums();
  const { isLoading: isLoadingPlaylists, savedPlaylists } = useSavedPlaylists();
  const dispatch = useDispatch();
  const { followedItems, filteredItems } = useSelector(
    (store) => store.library,
  );

  useEffect(() => {
    //put all the followed items into a single array
    const items = [
      ...(followedArtists || []),
      ...(savedAlbums || []),
      ...(savedPlaylists || []),
    ];

    dispatch(setFollowedItems(items));
  }, [followedArtists, savedAlbums, savedPlaylists, dispatch]);

  const isLoading = isLoadingAlbums || isLoadingPlaylists || isLoadingArtists;

  return { isLoading, followedItems, filteredItems };
}

export default useFollowedItems;
