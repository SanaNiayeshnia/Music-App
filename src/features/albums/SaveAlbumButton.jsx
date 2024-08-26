import { Tooltip } from "@mui/material";
import TinySpinner from "../../ui/TinySpinner";
import { TbCircleCheckFilled, TbCirclePlus } from "react-icons/tb";
import useSaveAlbum from "./hooks/useSaveAlbum";
import useIsAlbumSaved from "./hooks/useIsAlbumSaved";
import useUnsaveAlbum from "./hooks/useUnsaveAlbum";

function SaveAlbumButton({ album }) {
  const { isAlbumSaved } = useIsAlbumSaved(album.id);
  const { isPending: isPendingSave, saveAlbumMutate } = useSaveAlbum(album.id);
  const { isPending: isPendingUnsave, unsaveAlbumMutate } = useUnsaveAlbum(
    album.id,
  );

  return (
    <Tooltip
      title={isAlbumSaved ? "Remove from your library" : "Save to your library"}
      placement="top"
    >
      <div className="grid place-items-center">
        {isPendingSave || isPendingUnsave ? (
          <TinySpinner />
        ) : (
          <>
            {!isAlbumSaved ? (
              <TbCirclePlus
                onClick={saveAlbumMutate}
                className="min-h-7 min-w-7 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white"
              />
            ) : (
              <TbCircleCheckFilled
                onClick={unsaveAlbumMutate}
                className="min-h-7 min-w-7 cursor-pointer text-blue-600 duration-100 hover:scale-105"
              />
            )}
          </>
        )}
      </div>
    </Tooltip>
  );
}

export default SaveAlbumButton;
