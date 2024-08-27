import { useQuery } from "@tanstack/react-query";
import { getCategoriesPlaylists } from "../../../services/playlistsAPi";

function useCategoriesPlaylists(id) {
  const { isLoading, data: categoriesPlaylists } = useQuery({
    queryKey: ["categories-playlists", id],
    queryFn: () => getCategoriesPlaylists(id),
  });

  return { isLoading, categoriesPlaylists };
}

export default useCategoriesPlaylists;
