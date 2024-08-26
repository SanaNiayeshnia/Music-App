import { useQuery } from "@tanstack/react-query";
import { getAppearsOn } from "../../../services/artistsAPi";
import { useSelector } from "react-redux";

function useArtistsAppearsOn(id) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: appearsOn } = useQuery({
    queryKey: ["appears-on", id],
    queryFn: () => getAppearsOn(id),
    enabled: Boolean(accessToken),
  });
  return { isLoading, appearsOn };
}

export default useArtistsAppearsOn;
