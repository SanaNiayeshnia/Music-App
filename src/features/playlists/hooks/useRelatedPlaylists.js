import { useQuery } from "@tanstack/react-query";
import { getRelatedPlaylists } from "../../../services/playlistsAPi";
import { useSelector } from "react-redux";

function useRelatedPlaylists(genre) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: relatedPlaylists } = useQuery({
    queryKey: ["related-playlist", genre],
    queryFn: () => getRelatedPlaylists(genre),
    enabled: Boolean(accessToken),
  });
  return { isLoading, relatedPlaylists };
}

export default useRelatedPlaylists;
