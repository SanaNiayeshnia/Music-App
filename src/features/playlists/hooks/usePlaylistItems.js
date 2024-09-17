import { useInfiniteQuery } from "@tanstack/react-query";
import { getPlaylistItems } from "../../../services/playlistsAPi";
import { getUsersSavedTracks } from "../../../services/tracksApi";

function usePlaylistItems(playlistId) {
  const {
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["playlist-items", playlistId],
    queryFn: ({ pageParam = null }) =>
      playlistId == "LikedSongs"
        ? getUsersSavedTracks({ pageParam })
        : getPlaylistItems({ pageParam, playlistId }),
    getNextPageParam: (lastPage) => lastPage.next || null,
  });

  const playlistItems = data?.pages?.flatMap((page) =>
    page?.items?.map((item) => item?.track),
  );

  return {
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    playlistItems,
  };
}

export default usePlaylistItems;
