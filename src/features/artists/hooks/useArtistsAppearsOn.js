import { useInfiniteQuery } from "@tanstack/react-query";
import { getAppearsOn } from "../../../services/artistsAPi";
import { useSelector } from "react-redux";

function useArtistsAppearsOn(artistId) {
  const { accessToken } = useSelector((store) => store.authentication);

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
    enabled: Boolean(accessToken),
  });

  console.log(data);

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
