import { useInfiniteQuery } from "@tanstack/react-query";
import { getFollowedArtists } from "../../../services/artistsAPi";
import { useEffect } from "react";

function useFollowedArtists() {
  const { isLoading, data, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["followed-artists"],
      queryFn: ({ pageParam = null }) => getFollowedArtists({ pageParam }),
      getNextPageParam: (lastPage) => lastPage.next,
    });

  const followedArtists = data?.pages?.flatMap((page) => page.items) || [];

  const nextUrl = data?.pages[data?.pages.length - 1]?.next;
  useEffect(() => {
    //fetch artists till there are no more
    if (hasNextPage) fetchNextPage();
  }, [hasNextPage, fetchNextPage, nextUrl]);

  return {
    isLoading,
    followedArtists,
    isFetching,
    hasNextPage,
    fetchNextPage,
  };
}

export default useFollowedArtists;
