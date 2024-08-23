import usePlaylist from "./usePlaylist";

function useIsTrackInThePlaylist(playlistId, trackId) {
  const { isLoading, playlist } = usePlaylist(playlistId);
  const isTrackInPlaylist = playlist.some((track) => (track.id = trackId));
  return { isLoading, isTrackInPlaylist };
}

export default useIsTrackInThePlaylist;
