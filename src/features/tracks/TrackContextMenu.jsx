import useSaveTrack from "./useSaveTrack";
import useUnsaveTrack from "./useUnsaveTrack";
import useIsTrackSaved from "./useIsTrackSaved";

import ItemContextMenu from "../../ui/ItemContextMenu";
import { useSelector } from "react-redux";
import useRemoveItemsFromPlaylist from "../playlists/useRemoveItemsFromPlaylist";

function TrackContextMenu({
  track,
  position,
  setIsUsingContextMenu,
  playlist,
}) {
  const { isLoading: isLoadingTrackSaved, isTrackSaved } = useIsTrackSaved(
    track?.id,
  );
  const { isPending: isPendingSave, saveTrackMutate } = useSaveTrack(track?.id);
  const { isPending: isPendingUnsave, unsaveTrackMutate } = useUnsaveTrack(
    track?.id,
  );
  const { user } = useSelector((store) => store.authentication);
  const doesPlaylistBelongsToUser = playlist?.owner?.id === user?.id;
  const { removeItemsFromPlaylistMutate } = useRemoveItemsFromPlaylist();
  function removeFromPlaylist() {
    removeItemsFromPlaylistMutate({
      playlistId: playlist?.id,
      itemUris: [{ uri: track.uri }],
    });
  }

  return (
    <ItemContextMenu
      isLoadingItemSaved={isLoadingTrackSaved}
      isItemSaved={isTrackSaved}
      isPendingSave={isPendingSave}
      isPendingUnsave={isPendingUnsave}
      saveItemMutate={saveTrackMutate}
      unsaveItemMutate={unsaveTrackMutate}
      item={track}
      position={position}
      setIsUsingContextMenu={setIsUsingContextMenu}
      removeFromPlaylist={doesPlaylistBelongsToUser ? removeFromPlaylist : null}
    />
  );
}

export default TrackContextMenu;
