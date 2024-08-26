import { useQuery } from "@tanstack/react-query";
import { getArtistsDiscography } from "../../../services/artistsAPi";
import { useSelector } from "react-redux";

function useArtistsDiscography(id) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: artistsDiscography } = useQuery({
    queryKey: ["artists-Discography", id],
    queryFn: () => getArtistsDiscography(id),
    enabled: Boolean(accessToken),
  });
  return { isLoading, artistsDiscography };
}

export default useArtistsDiscography;
