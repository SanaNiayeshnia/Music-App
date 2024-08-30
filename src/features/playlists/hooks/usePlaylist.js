import { useQuery } from "@tanstack/react-query";
import { getPlaylist } from "../../../services/playlistsAPi";

function usePlaylist(id) {
  const { isLoading, data: playlist } = useQuery({
    queryKey: ["playlist", id],
    queryFn: () => getPlaylist(id),
    enabled: Boolean(id),
    staleTime: 30 * 1000,
  });

  return { isLoading, playlist };
}

export default usePlaylist;
