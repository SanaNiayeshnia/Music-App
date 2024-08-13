import PageMenu from "../../ui/PageMenu";
import useSavedPlaylists from "./useSavedPlaylists";

function PlaylistPageMenu({ playlist }) {
  const { isLoading, savedPlaylists } = useSavedPlaylists();
  const isPlaylistSaved = savedPlaylists?.some(
    (savedPlaylist) => savedPlaylist.id === playlist.id,
  );
  return (
    <PageMenu item={playlist} isSaved={isLoading ? false : isPlaylistSaved} />
  );
}

export default PlaylistPageMenu;
