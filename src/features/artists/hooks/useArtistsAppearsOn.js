import { useInfiniteQuery } from "@tanstack/react-query";
import { getAppearsOn } from "../../../services/artistsAPi";

function useArtistsAppearsOn(artistId) {
  const {
    isLoading,
    data,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["appears-on", artistId],
    queryFn: ({ pageParam = null }) => getAppearsOn({ artistId, pageParam }),
    getNextPageParam: (lastPage) => lastPage.next,
  });

  const appearsOn = data?.pages?.flatMap((page) => page.items);
  return {
    isLoading,
    appearsOn,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
}

export default useArtistsAppearsOn;
