import { useQuery } from "@tanstack/react-query";
import { getTrack } from "../../../services/tracksApi";
import { useSelector } from "react-redux";

function useTrack(id) {
  const { accessToken } = useSelector((store) => store.authentication);
  const { isLoading, data: track } = useQuery({
    queryKey: ["track", id],
    queryFn: () => getTrack(id),
    enabled: Boolean(accessToken),
  });
  return { isLoading, track };
}

export default useTrack;
