import { useQuery } from "@tanstack/react-query";
import { getSavedPlaylists } from "../../../services/playlistsAPi";

function useSavedPlaylists() {
  const { isLoading, data } = useQuery({
    queryKey: ["saved-playlists"],
    queryFn: getSavedPlaylists,
  });

  const savedPlaylists = data?.playlists;
  const count = data?.count;
  const next = data?.next;
  return { isLoading, savedPlaylists, count, next };
}

export default useSavedPlaylists;
