import { Tooltip } from "@mui/material";
import useIsTrackSaved from "./hooks/useIsTrackSaved";
import useSaveTrack from "./hooks/useSaveTrack";
import useUnsaveTrack from "./hooks/useUnsaveTrack";
import TinySpinner from "../../ui/TinySpinner";
import { RiHeart3Fill, RiHeartAdd2Line } from "react-icons/ri";

function SaveTrackButton({ track, className }) {
  const { isTrackSaved } = useIsTrackSaved(track?.id);
  const { isPending: isPendingSave, saveTrackMutate } = useSaveTrack(track?.id);
  const { isPending: isPendingUnsave, unsaveTrackMutate } = useUnsaveTrack(
    track?.id,
  );

  return (
    <Tooltip
      title={isTrackSaved ? "Remove from liked songs" : "Save to likes songs"}
      placement="top"
      PopperProps={{ disablePortal: true }}
    >
      <div className="grid place-items-center">
        {isPendingSave || isPendingUnsave ? (
          <TinySpinner />
        ) : (
          <>
            {!isTrackSaved ? (
              <RiHeartAdd2Line
                onClick={saveTrackMutate}
                className={`${className} cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white`}
              />
            ) : (
              <RiHeart3Fill
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
