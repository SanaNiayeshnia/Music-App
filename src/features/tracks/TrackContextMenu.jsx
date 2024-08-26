import useSaveTrack from "./hooks/useSaveTrack";
import useUnsaveTrack from "./hooks/useUnsaveTrack";
import useIsTrackSaved from "./hooks/useIsTrackSaved";
import ItemContextMenu from "../../ui/ItemContextMenu";
import { useSelector } from "react-redux";
import useRemoveItemsFromPlaylist from "../playlists/hooks/useRemoveItemsFromPlaylist";

function TrackContextMenu({
  track,
  position,
  setIsUsingContextMenu,
  playlist,
  smallScreen,
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
      smallScreen={smallScreen}
    />
  );
}

export default TrackContextMenu;
