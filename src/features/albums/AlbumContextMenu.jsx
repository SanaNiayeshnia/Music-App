import {
  TbCircleCheckFilled,
  TbCirclePlus,
  TbLink,
  TbMusicPlus,
  TbPlus,
} from "react-icons/tb";
import TinySpinner from "../../ui/TinySpinner";
import ContextMenu from "../../ui/ContextMenu";
import { copyLink } from "../../utilities/helper";
import useSaveAlbum from "./useSaveAlbum";
import useUnsaveAlbum from "./useUnsaveAlbum";
import useIsAlbumSaved from "./useIsAlbumSaved";
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
