import { useInfiniteQuery } from "@tanstack/react-query";
import { getArtistsDiscography } from "../../../services/artistsAPi";

function useArtistsDiscography(artistId) {
  const {
    isLoading,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["artists-Discography", artistId],
    queryFn: ({ pageParam = null }) =>
      getArtistsDiscography({ pageParam, artistId }),
    getNextPageParam: (lastPage) => lastPage.next,
  });
  const artistsDiscography = data?.pages?.flatMap((page) => page?.items);

  return {
    isLoading,
    artistsDiscography,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
}

export default useArtistsDiscography;
