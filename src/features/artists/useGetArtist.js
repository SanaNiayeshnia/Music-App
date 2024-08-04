import { useQuery } from "@tanstack/react-query";
import { getArtist } from "../../services/artistsAPi";

function useGetArtist(id) {
  const { isLaoding, data: artist } = useQuery({
    queryKey: [`artist-${id}`],
    queryFn: () => getArtist(id),
  });
  return { isLaoding, artist };
}

export default useGetArtist;
