import { useQuery } from "@tanstack/react-query";
import { checkUsersSavedPlaylists } from "../../../services/playlistsAPi";

function useIsPlaylistSaved(id) {
  const { isLoading, data: isPlaylistSaved } = useQuery({
    queryKey: ["is-playlist-saved", id],
    queryFn: () => checkUsersSavedPlaylists(id),
  });
  return { isLoading, isPlaylistSaved };
}

export default useIsPlaylistSaved;
