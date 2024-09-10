import { useInfiniteQuery } from "@tanstack/react-query";
import { getArtistsDiscography } from "../../../services/artistsAPi";
import { useSelector } from "react-redux";

function useArtistsDiscography(artistId) {
  const { accessToken } = useSelector((store) => store.authentication);

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
    enabled: Boolean(accessToken),
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
