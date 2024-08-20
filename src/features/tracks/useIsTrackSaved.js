import useSavedTracks from "./useSavedTracks";

function useIsTrackSaved(id) {
  const { isLoading, savedTracks } = useSavedTracks();
  const isTrackSaved = savedTracks?.some((track) => track.id === id);
  // const { isLoading, data: isTrackSaved } = useQuery({
  //   queryKey: ["is-track-saved", id],
  //   queryFn: () => checkUsersSavedTracks(id),
  //   enabled: Boolean(id),
  // });
  return { isLoading, isTrackSaved };
}

export default useIsTrackSaved;
