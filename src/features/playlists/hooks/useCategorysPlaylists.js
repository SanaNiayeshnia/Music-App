import { useInfiniteQuery } from "@tanstack/react-query";
import { getCategorysPlaylists } from "../../../services/playlistsAPi";

function useCategorysPlaylists(name) {
  const {
    isLoading,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["categories-playlists", name],
    queryFn: ({ pageParam }) => getCategorysPlaylists({ name, pageParam }),
    getNextPageParam: (lastPage) => lastPage.playlists.next,
    enabled: Boolean(name),
  });

  const categorysPlaylists = data?.pages
    ?.flatMap((page) => page.playlists.items)
    ?.filter(Boolean);

  return {
    isLoading,
    categorysPlaylists: categorysPlaylists || [],
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
}

export default useCategorysPlaylists;
