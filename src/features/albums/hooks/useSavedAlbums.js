import { useInfiniteQuery } from "@tanstack/react-query";
import { getSavedAlbums } from "../../../services/albumsApi";

function useSavedAlbums() {
  const { isLoading, data, hasNextPage, fetchNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["saved-albums"],
      queryFn: ({ pageParam = null }) => getSavedAlbums({ pageParam }),
      getNextPageParam: (lastPage) => lastPage.next,
    });

  const savedAlbums = data?.pages?.flatMap((page) => page.albums) || [];
  return { isLoading, savedAlbums, isFetching, hasNextPage, fetchNextPage };
}

export default useSavedAlbums;
