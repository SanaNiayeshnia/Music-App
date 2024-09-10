import { useQuery } from "@tanstack/react-query";
import { getRelatedArtists } from "../../../services/artistsAPi";

function useRelatedArtists(id) {
  const { isLoading, data: relatedArtists } = useQuery({
    queryKey: ["related-artists", id],
    queryFn: () => getRelatedArtists(id),
  });
  return { isLoading, relatedArtists };
}

export default useRelatedArtists;
