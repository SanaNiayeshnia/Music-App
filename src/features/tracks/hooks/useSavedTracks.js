import { useInfiniteQuery } from "@tanstack/react-query";
import { getUsersSavedTracks } from "../../../services/tracksApi";

function useSavedTracks() {
  const { isLoading, data, fetchNextPage, isFetching, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["saved-tracks"],
      queryFn: ({ pageParam = null }) => getUsersSavedTracks({ pageParam }),
      getNextPageParam: (lastPage) => lastPage?.next,
    });
  const savedTracks = data?.pages
    ?.flatMap((page) => page.items)
    ?.map((item) => item.track);
  return { isLoading, savedTracks, hasNextPage, isFetching, fetchNextPage };
}

export default useSavedTracks;
