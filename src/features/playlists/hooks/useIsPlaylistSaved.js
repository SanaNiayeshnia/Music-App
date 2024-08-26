import { useQuery } from "@tanstack/react-query";
import { checkUsersSavedPlaylists } from "../../../services/playlistsAPi";
import { useSelector } from "react-redux";

function useIsPlaylistSaved(id) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: isPlaylistSaved } = useQuery({
    queryKey: ["is-playlist-saved", id],
    queryFn: () => checkUsersSavedPlaylists(id),
    enabled: Boolean(accessToken),
  });
  return { isLoading, isPlaylistSaved };
}

export default useIsPlaylistSaved;
