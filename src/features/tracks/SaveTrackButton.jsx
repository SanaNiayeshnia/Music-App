import { Tooltip } from "@mui/material";
import { TbCircleCheckFilled, TbCirclePlus } from "react-icons/tb";
import useIsTrackSaved from "./useIsTrackSaved";
import useSaveTrack from "./useSaveTrack";
import useUnsaveTrack from "./useUnsaveTrack";
import TinySpinner from "../../ui/TinySpinner";

function SaveTrackButton({ track, className }) {
  const { isTrackSaved } = useIsTrackSaved(track.id);
  const { isPending: isPendingSave, saveTrackMutate } = useSaveTrack(track.id);
  const { isPending: isPendingUnsave, unsaveTrackMutate } = useUnsaveTrack(
    track.id,
  );

  return (
    <Tooltip
      title={isTrackSaved ? "Remove from your library" : "Save to your library"}
      placement="top"
    >
      <div className="grid place-items-center">
        {isPendingSave || isPendingUnsave ? (
          <TinySpinner />
        ) : (
          <>
            {!isTrackSaved ? (
              <TbCirclePlus
                onClick={saveTrackMutate}
                className={`${className} cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white`}
              />
            ) : (
              <TbCircleCheckFilled
                onClick={unsaveTrackMutate}
                className={`${className} cursor-pointer text-blue-600 duration-100 hover:scale-105`}
              />
            )}
          </>
        )}
      </div>
    </Tooltip>
  );
}

export default SaveTrackButton;
