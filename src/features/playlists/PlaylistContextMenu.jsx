import useIsPlaylistSaved from "./hooks/useIsPlaylistSaved";
import useSavePlaylist from "./hooks/useSavePlaylist";
import useUnsavePlaylist from "./hooks/useUnsavePlaylist";
import ItemContextMenu from "../../ui/ItemContextMenu";

function PlaylistContextMenu({ position, playlist }) {
  const { isLoading: isLoadingPlaylistSaved, isPlaylistSaved } =
    useIsPlaylistSaved(playlist?.id);
  const { isPending: isPendingSave, savePlaylistMutate } = useSavePlaylist(
    playlist?.id,
  );
  const { isPending: isPendingUnsave, unsavePlaylistMutate } =
    useUnsavePlaylist(playlist?.id);

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
    />
  );
}

export default PlaylistContextMenu;
