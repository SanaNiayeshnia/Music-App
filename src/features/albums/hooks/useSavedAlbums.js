import { useInfiniteQuery } from "@tanstack/react-query";
import { getSavedAlbums } from "../../../services/albumsApi";
import { useEffect } from "react";

function useSavedAlbums() {
  const { isLoading, data, hasNextPage, fetchNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["saved-albums"],
      queryFn: ({ pageParam = null }) => getSavedAlbums({ pageParam }),
      getNextPageParam: (lastPage) => lastPage.next,
    });

  const savedAlbums = data?.pages?.flatMap((page) => page.albums) || [];

  const nextUrl = data?.pages[data?.pages.length - 1]?.next;
  useEffect(() => {
    //fetch albums till there are no more
    if (hasNextPage) fetchNextPage();
  }, [hasNextPage, fetchNextPage, nextUrl]);

  return {
    isLoading,
    savedAlbums,
    isFetching,
    hasNextPage,
    fetchNextPage,
  };
}

export default useSavedAlbums;
