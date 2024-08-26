import { useQuery } from "@tanstack/react-query";
import { getPlaylist } from "../../../services/playlistsAPi";
import { useSelector } from "react-redux";

function usePlaylist(id) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: playlist } = useQuery({
    queryKey: ["playlist", id],
    queryFn: () => getPlaylist(id),
    enabled: Boolean(id) && Boolean(accessToken),
  });

  return { isLoading, playlist };
}

export default usePlaylist;
