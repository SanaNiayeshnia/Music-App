import { Tooltip } from "@mui/material";
import TinySpinner from "../../ui/TinySpinner";
import { TbCircleCheckFilled, TbCirclePlus } from "react-icons/tb";
import useIsPlaylistSaved from "./hooks/useIsPlaylistSaved";
import useSavePlaylist from "./hooks/useSavePlaylist";
import useUnsavePlaylist from "./hooks/useUnsavePlaylist";

function SavePlaylistButton({ playlist }) {
  const { isPlaylistSaved } = useIsPlaylistSaved(playlist.id);
  const { isPending: isPendingSave, savePlaylistMutate } = useSavePlaylist(
    playlist.id,
  );
  const { isPending: isPendingUnsave, unsavePlaylistMutate } =
    useUnsavePlaylist(playlist.id);
  return (
    <Tooltip
      title={
        isPlaylistSaved ? "Remove from your library" : "Save to your library"
      }
      placement="top"
    >
      <div className="grid place-items-center">
        {isPendingSave || isPendingUnsave ? (
          <TinySpinner />
        ) : (
          <>
            {!isPlaylistSaved ? (
              <TbCirclePlus
                onClick={savePlaylistMutate}
                className="min-h-7 min-w-7 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white"
              />
            ) : (
              <TbCircleCheckFilled
                onClick={unsavePlaylistMutate}
                className="min-h-7 min-w-7 cursor-pointer text-blue-600 duration-100 hover:scale-105"
              />
            )}
          </>
        )}
      </div>
    </Tooltip>
  );
}

export default SavePlaylistButton;
