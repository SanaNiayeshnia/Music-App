import { useQuery } from "@tanstack/react-query";
import { checkUsersSavedTracks } from "../../../services/tracksApi";
import useSavedTracks from "./useSavedTracks";

function useIsTrackSaved(id) {
  // const { isLoading, savedTracks } = useSavedTracks();
  // const isTrackSaved = savedTracks?.some((track) => track.id === id);
  const { isLoading, data: isTrackSaved } = useQuery({
    queryKey: ["is-track-saved", id],
    queryFn: () => checkUsersSavedTracks(id),
    enabled: Boolean(id),
  });
  console.log(isTrackSaved);
  return { isLoading, isTrackSaved };
}

export default useIsTrackSaved;
