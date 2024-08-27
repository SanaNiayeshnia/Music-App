import { useQuery } from "@tanstack/react-query";
import { getCategorysPlaylists } from "../../../services/playlistsAPi";

function useCategorysPlaylists(id) {
  const { isLoading, data: categorysPlaylists } = useQuery({
    queryKey: ["categories-playlists", id],
    queryFn: () => getCategorysPlaylists(id),
    enabled: Boolean(id),
  });

  return { isLoading, categorysPlaylists };
}

export default useCategorysPlaylists;
