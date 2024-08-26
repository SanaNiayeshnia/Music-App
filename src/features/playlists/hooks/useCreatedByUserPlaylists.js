import useCurrentUser from "../../authentication/hooks/useCurrentUser";
import useSavedPlaylists from "./useSavedPlaylists";

function useCreatedByUserPlaylists() {
  const { isLoading: isLoadingSavedPlaylists, savedPlaylists } =
    useSavedPlaylists();
  const { isLoading: isLoadingUser, user } = useCurrentUser();
  const playlists = savedPlaylists?.filter(
    (savedPlaylist) => savedPlaylist?.owner?.id === user?.id,
  );
  return { isLoading: isLoadingSavedPlaylists || isLoadingUser, playlists };
}

export default useCreatedByUserPlaylists;
