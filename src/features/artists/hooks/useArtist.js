import { useQuery } from "@tanstack/react-query";
import { getArtist } from "../../../services/artistsAPi";
import { useSelector } from "react-redux";

function useArtist(id) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: artist } = useQuery({
    queryKey: ["artist", id],
    queryFn: () => getArtist(id),
    enabled: Boolean(id) && Boolean(accessToken),
  });
  return { isLoading, artist };
}

export default useArtist;
