import { useInfiniteQuery } from "@tanstack/react-query";
import { getSavedPlaylists } from "../../../services/playlistsAPi";

function useSavedPlaylists() {
  const { isLoading, data, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["saved-playlists"],
      queryFn: ({ pageParam = null }) => getSavedPlaylists({ pageParam }),
      getNextPageParam: (lastPage) => lastPage.next,
    });

  const savedPlaylists = data?.pages.flatMap((page) => page.playlists) || [];
  return { isLoading, savedPlaylists, isFetching, hasNextPage, fetchNextPage };
}

export default useSavedPlaylists;
