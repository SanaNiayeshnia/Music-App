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

  useEffect(() => {
    if (hasNextPage && data) {
      const lastPage = data?.pages[data?.pages.length - 1];
      console.log(lastPage.next);
      queryClient.prefetchQuery({
        queryKey: ["followed-artists", lastPage.next],
        queryFn: () => getFollowedArtists({ pageParam: lastPage.next }),
      });
    }
  }, [hasNextPage, data, queryClient]);

  return {
    isLoading,
    followedArtists,
    isFetching,
    hasNextPage,
    fetchNextPage,
  };
}

export default useFollowedArtists;
