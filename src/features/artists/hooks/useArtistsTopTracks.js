import { useQuery } from "@tanstack/react-query";
import { getArtistsTopTracks } from "../../../services/artistsAPi";
import { useSelector } from "react-redux";

function useArtistsTopTracks(id) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: artistsTopTracks } = useQuery({
    queryKey: ["artists-top-track", id],
    queryFn: () => getArtistsTopTracks(id),
    enabled: Boolean(accessToken),
  });

  return { isLoading, artistsTopTracks };
}

export default useArtistsTopTracks;
