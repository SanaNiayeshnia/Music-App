import { useQuery } from "@tanstack/react-query";
import { getSavedPlaylists } from "../../services/playlistsAPi";

function useSavedPlaylists() {
  const { isLoading, data: savedPlaylists } = useQuery({
    queryKey: ["saved-playlist"],
    queryFn: getSavedPlaylists,
  });
  return { isLoading, savedPlaylists };
}

export default useSavedPlaylists;
