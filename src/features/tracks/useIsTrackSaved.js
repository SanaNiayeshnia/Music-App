import { useQuery } from "@tanstack/react-query";
import { checkUsersSavedTracks } from "../../services/tracksApi";

function useIsTrackSaved(id) {
  const { isLoading, data: isTrackSaved } = useQuery({
    queryKey: ["is-track-saved", id],
    queryFn: () => checkUsersSavedTracks(id),
  });
  return { isLoading, isTrackSaved };
}

export default useIsTrackSaved;
