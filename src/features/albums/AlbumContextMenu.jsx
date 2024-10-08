import useSaveAlbum from "./hooks/useSaveAlbum";
import useUnsaveAlbum from "./hooks/useUnsaveAlbum";
import useIsAlbumSaved from "./hooks/useIsAlbumSaved";
import ItemContextMenu from "../../ui/ItemContextMenu";

function AlbumContextMenu({ album, position }) {
  const { isLoading: isLoadingAlbumSaved, isAlbumSaved } = useIsAlbumSaved(
    album?.id,
  );
  const { isPending: isPendingSave, saveAlbumMutate } = useSaveAlbum(album?.id);
  const { isPending: isPendingUnsave, unsaveAlbumMutate } = useUnsaveAlbum(
    album?.id,
  );
  return (
    <ItemContextMenu
      isLoadingItemSaved={isLoadingAlbumSaved}
      isItemSaved={isAlbumSaved}
      isPendingSave={isPendingSave}
      isPendingUnsave={isPendingUnsave}
      saveItemMutate={saveAlbumMutate}
      unsaveItemMutate={unsaveAlbumMutate}
      item={album}
      position={position}
    />
  );
}

export default AlbumContextMenu;
