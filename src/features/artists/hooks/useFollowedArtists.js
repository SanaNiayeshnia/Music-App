import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { getFollowedArtists } from "../../../services/artistsAPi";
import { useEffect } from "react";

function useFollowedArtists() {
  const queryClient = useQueryClient();
  const { isLoading, data, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["followed-artists"],
      queryFn: ({ pageParam = null }) => getFollowedArtists({ pageParam }),
      getNextPageParam: (lastPage) => lastPage.next,
    });

  const followedArtists = data?.pages?.flatMap((page) => page.items) || [];

  return {
    isLoading,
    followedArtists,
    isFetching,
    hasNextPage,
    next: data?.pages[data?.pages.length - 1]?.next,
    fetchNextPage,
  };
}

export default useFollowedArtists;
