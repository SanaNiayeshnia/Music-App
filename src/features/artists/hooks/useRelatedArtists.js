import { useQuery } from "@tanstack/react-query";
import { getRelatedArtists } from "../../../services/artistsAPi";
import { useSelector } from "react-redux";

function useRelatedArtists(id) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: relatedArtists } = useQuery({
    queryKey: ["related-artists", id],
    queryFn: () => getRelatedArtists(id),
    enabled: Boolean(accessToken),
  });
  return { isLoading, relatedArtists };
}

export default useRelatedArtists;
