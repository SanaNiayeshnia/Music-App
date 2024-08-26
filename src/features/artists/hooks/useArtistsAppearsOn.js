import { useQuery } from "@tanstack/react-query";
import { getAppearsOn } from "../../../services/artistsAPi";

function useArtistsAppearsOn(id) {
  const { isLoading, data: appearsOn } = useQuery({
    queryKey: ["appears-on", id],
    queryFn: () => getAppearsOn(id),
  });
  return { isLoading, appearsOn };
}

export default useArtistsAppearsOn;
