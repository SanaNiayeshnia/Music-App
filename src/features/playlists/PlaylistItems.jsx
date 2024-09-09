import TrackList from "../tracks/TrackList";
import usePlaylist from "./hooks/usePlaylist";
import usePlaylistItems from "./hooks/usePlaylistItems";

function PlaylistItems({ id }) {
  const { isLoading: isLoadingPlaylist, playlist } = usePlaylist(id);
  const {
    isLoading: isLoadingItems,
    playlistItems,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = usePlaylistItems(id);
  return (
    <TrackList
      all={true}
      items={playlistItems?.filter((item) => item?.type === "track")}
      playlist={{
        id: playlist?.id,
        owner: playlist?.owner,
        name: playlist?.name,
      }}
      isLoading={isLoadingPlaylist || isLoadingItems}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetching={isFetching}
    />
  );
}

export default PlaylistItems;
