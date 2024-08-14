import PageMenu from "../../ui/PageMenu";
import useIsPlaylistSaved from "./useIsPlaylistSaved";

function PlaylistPageMenu({ playlist }) {
  const { isLoading, isPlaylistSaved } = useIsPlaylistSaved(playlist?.id);
  return (
    <PageMenu item={playlist} isSaved={isLoading ? false : isPlaylistSaved} />
  );
}

export default PlaylistPageMenu;
