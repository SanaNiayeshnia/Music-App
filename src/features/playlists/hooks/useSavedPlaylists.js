import { useInfiniteQuery } from "@tanstack/react-query";
import { getSavedPlaylists } from "../../../services/playlistsAPi";
import { useEffect } from "react";
import useLikedSongsPlaylist from "./useLikedSongsPlaylist";

function useSavedPlaylists() {
  const { isLoading, data, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["saved-playlists"],
      queryFn: ({ pageParam = null }) => getSavedPlaylists({ pageParam }),
      getNextPageParam: (lastPage) => lastPage.next,
    });

  const { likedSongsPlaylist } = useLikedSongsPlaylist();

  const savedPlaylists = [
    ...(data?.pages?.flatMap((page) => page?.playlists) || []),
    likedSongsPlaylist,
  ].filter(Boolean);

  const nextUrl = data?.pages[data?.pages.length - 1]?.next;
  console.log(savedPlaylists);
  useEffect(() => {
    //fetch playlists till there are no more
    if (hasNextPage) fetchNextPage();
  }, [hasNextPage, fetchNextPage, nextUrl]);

  return {
    isLoading,
    savedPlaylists,
    isFetching,
    hasNextPage,
    fetchNextPage,
  };
}

export default useSavedPlaylists;
