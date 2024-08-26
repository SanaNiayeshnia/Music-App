import { useQuery } from "@tanstack/react-query";
import { getTrack } from "../../../services/tracksApi";

function useTrack(id) {
  const { isLoading, data: track } = useQuery({
    queryKey: ["track", id],
    queryFn: () => getTrack(id),
  });
  return { isLoading, track };
}

export default useTrack;
