import { useQuery } from "@tanstack/react-query";
import { getNewReleases } from "../../../services/albumsApi";
import { useSelector } from "react-redux";

function useNewReleases() {
  const { accessToken } = useSelector((store) => store.authentication);
  const { isLoading, data: newReleases } = useQuery({
    queryKey: ["new-releases"],
    queryFn: getNewReleases,
    enabled: Boolean(accessToken),
  });
  return { isLoading, newReleases };
}

export default useNewReleases;
