import useSavedTracks from "./useSavedTracks";

function useIsTrackSaved(id) {
  const { isLoading, savedTracks } = useSavedTracks();
  const isTrackSaved = savedTracks?.some((track) => track.id === id);
  return { isLoading, isTrackSaved };
}

export default useIsTrackSaved;
