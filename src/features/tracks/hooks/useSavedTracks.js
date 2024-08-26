import { useQuery } from "@tanstack/react-query";
import { getUsersSavedTracks } from "../../../services/tracksApi";

function useSavedTracks() {
  const { isLoading, data } = useQuery({
    queryKey: ["saved-tracks"],
    queryFn: getUsersSavedTracks,
  });
  const savedTracks = data?.items?.map((item) => item.track);
  return { isLoading, savedTracks };
}

export default useSavedTracks;
