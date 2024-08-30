import { useQuery } from "@tanstack/react-query";
import { getPlaylist } from "../../../services/playlistsAPi";
import { useSelector } from "react-redux";

function usePlaylist(id) {
  const { isLoading, data: playlist } = useQuery({
    queryKey: ["playlist", id],
    queryFn: () => getPlaylist(id),
    enabled: Boolean(id),
    staleTime: 30 * 1000,
  });

  console.log("fetching playlist", id);

  return { isLoading, playlist };
}

export default usePlaylist;
