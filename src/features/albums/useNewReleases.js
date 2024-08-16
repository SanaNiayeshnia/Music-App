import { useQuery } from "@tanstack/react-query";
import { getNewReleases } from "../../services/albumsApi";

function useNewReleases() {
  const { isLoading, data: newReleases } = useQuery({
    queryKey: ["new-releases"],
    queryFn: getNewReleases,
  });
  return { isLoading, newReleases };
}

export default useNewReleases;
