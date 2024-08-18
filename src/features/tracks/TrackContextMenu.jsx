import useSaveTrack from "./useSaveTrack";
import useUnsaveTrack from "./useUnsaveTrack";
import useIsTrackSaved from "./useIsTrackSaved";

import ItemContextMenu from "../../ui/ItemContextMenu";

function TrackContextMenu({ track, position }) {
  const { isLoading: isLoadingTrackSaved, isTrackSaved } = useIsTrackSaved(
    track?.id,
  );
  const { isPending: isPendingSave, saveTrackMutate } = useSaveTrack(track?.id);
  const { isPending: isPendingUnsave, unsaveTrackMutate } = useUnsaveTrack(
    track?.id,
  );
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
    />
  );
}

export default TrackContextMenu;
