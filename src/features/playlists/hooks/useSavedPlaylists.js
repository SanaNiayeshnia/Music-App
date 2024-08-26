import { useQuery } from "@tanstack/react-query";
import { getSavedPlaylists } from "../../../services/playlistsAPi";
import { useSelector } from "react-redux";

function useSavedPlaylists() {
  const { accessToken } = useSelector((store) => store.authentication);
  const { isLoading, data } = useQuery({
    queryKey: ["saved-playlists"],
    queryFn: getSavedPlaylists,
    enabled: Boolean(accessToken),
  });

  const savedPlaylists = data?.playlists;
  const count = data?.count;
  const next = data?.next;
  return { isLoading, savedPlaylists, count, next };
}

export default useSavedPlaylists;
