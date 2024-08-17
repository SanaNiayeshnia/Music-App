import ContextMenu from "../../ui/ContextMenu";
import {
  TbCircleCheckFilled,
  TbCirclePlus,
  TbLink,
  TbMusicPlus,
  TbPlus,
} from "react-icons/tb";
import useSaveTrack from "./useSaveTrack";
import useUnsaveTrack from "./useUnsaveTrack";
import useIsTrackSaved from "./useIsTrackSaved";
import TinySpinner from "../../ui/TinySpinner";
import { copyLink } from "../../utilities/helper";

function TrackContextMenu({ track, position }) {
  const { isLoading: isLoadingTrackSaved, isTrackSaved } = useIsTrackSaved(
    track?.id,
  );
  const { isPending: isPendingSave, saveTrackMutate } = useSaveTrack(track?.id);
  const { isPending: isPendingUnsave, unsaveTrackMutate } = useUnsaveTrack(
    track?.id,
  );

  function handler() {}
  const options = [
    {
      title: isTrackSaved ? "Remove from your library" : "Add to your library",
      icon:
        isLoadingTrackSaved || isPendingSave || isPendingUnsave ? (
          <TinySpinner />
        ) : (
          <>
            {isTrackSaved ? (
              <TbCircleCheckFilled className="group-hover/contextli:text-blue-600" />
            ) : (
              <TbCirclePlus className="group-hover/contextli:text-blue-600" />
            )}
          </>
        ),

      handler: isTrackSaved ? unsaveTrackMutate : saveTrackMutate,
      close: true,
    },
    {
      title: "Add to the queue",
      icon: <TbMusicPlus className="group-hover/contextli:text-blue-600" />,
      handler,
    },
    {
      title: "Add to playlist",
      icon: <TbPlus className="group-hover/contextli:text-blue-600" />,
      handler,
    },
    {
      title: "Copy the link",
      icon: <TbLink className="group-hover/contextli:text-blue-600" />,
      handler: () => copyLink(track),
      close: true,
    },
  ];
  return <ContextMenu position={position} options={options} />;
}

export default TrackContextMenu;
