import { useQuery } from "@tanstack/react-query";
import { getArtistsTopTracks } from "../../../services/artistsAPi";

function useArtistsTopTracks(id) {
  const { isLoading, data: artistsTopTracks } = useQuery({
    queryKey: ["artists-top-track", id],
    queryFn: () => getArtistsTopTracks(id),
  });

  return { isLoading, artistsTopTracks };
}

export default useArtistsTopTracks;
