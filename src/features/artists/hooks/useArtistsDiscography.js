import { useQuery } from "@tanstack/react-query";
import { getArtistsDiscography } from "../../../services/artistsAPi";

function useArtistsDiscography(id) {
  const { isLoading, data: artistsDiscography } = useQuery({
    queryKey: ["artists-Discography", id],
    queryFn: () => getArtistsDiscography(id),
  });
  return { isLoading, artistsDiscography };
}

export default useArtistsDiscography;
