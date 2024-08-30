import useIsPlaylistSaved from "./hooks/useIsPlaylistSaved";
import useSavePlaylist from "./hooks/useSavePlaylist";
import useUnsavePlaylist from "./hooks/useUnsavePlaylist";
import ItemContextMenu from "../../ui/ItemContextMenu";
import useCurrentUser from "../authentication/hooks/useCurrentUser";

function PlaylistContextMenu({ position, playlist }) {
  const { isLoading: isLoadingPlaylistSaved, isPlaylistSaved } =
    useIsPlaylistSaved(playlist?.id);
  const { isPending: isPendingSave, savePlaylistMutate } = useSavePlaylist(
    playlist?.id,
  );
  const { isPending: isPendingUnsave, unsavePlaylistMutate } =
    useUnsavePlaylist(playlist?.id);

  const { user } = useCurrentUser();
  const doesPlaylistBelongsToUser = user?.id === playlist?.owner?.id;

  return (
    <ItemContextMenu
      isLoadingItemSaved={isLoadingPlaylistSaved}
      isItemSaved={isPlaylistSaved}
      isPendingSave={isPendingSave}
      isPendingUnsave={isPendingUnsave}
      saveItemMutate={savePlaylistMutate}
      unsaveItemMutate={unsavePlaylistMutate}
      item={playlist}
      position={position}
      noAddToPlaylist
      doesPlaylistBelongsToUser={doesPlaylistBelongsToUser}
    />
  );
}

export default PlaylistContextMenu;
