import { useQuery } from "@tanstack/react-query";
import { getRelatedPlaylists } from "../../services/playlistsAPi";

function useRelatedPlaylists(genre) {
  const { isLoading, data: relatedPlaylists } = useQuery({
    queryKey: ["related-playlist", genre],
    queryFn: () => getRelatedPlaylists(genre),
  });
  return { isLoading, relatedPlaylists };
}

export default useRelatedPlaylists;
