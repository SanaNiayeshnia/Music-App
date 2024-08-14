import PlayButton from "./PlayButton";
import { TbCircleCheckFilled, TbCirclePlus, TbDots } from "react-icons/tb";
import { Tooltip } from "@mui/material";
import FollowArtistButton from "../features/artists/FollowArtistButton";
import SaveTrackButton from "../features/tracks/SaveTrackButton";
import SaveAlbumButton from "../features/albums/SaveAlbumButton";

function PageMenu({ item, isSaved = false }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <PlayButton className="min-h-14 min-w-14" />
        {item?.type === "artist" ? (
          <FollowArtistButton artist={item} />
        ) : item?.type === "track" ? (
          <SaveTrackButton className="min-h-7 min-w-7" track={item} />
        ) : item?.type === "album" ? (
          <SaveAlbumButton album={item} />
        ) : (
          <Tooltip
            title={
              isSaved ? "Remove from your library" : "Save to your library"
            }
            placement="top"
          >
            <div>
              {!isSaved ? (
                <TbCirclePlus className="min-h-7 min-w-7 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white" />
              ) : (
                <TbCircleCheckFilled className="min-h-7 min-w-7 cursor-pointer text-blue-600 duration-100 hover:scale-105" />
              )}
            </div>
          </Tooltip>
        )}

        <TbDots className="min-h-6 min-w-6 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white" />
      </div>
    </div>
  );
}

export default PageMenu;
