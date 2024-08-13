import PlayButton from "./PlayButton";
import { TbCircleCheckFilled, TbCirclePlus, TbDots } from "react-icons/tb";
import { Tooltip } from "@mui/material";
import FollowArtistButton from "../features/artists/FollowArtistButton";

function PageMenu({ item, isSaved = false }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <PlayButton className="min-h-14 min-w-14" />
        {item?.type === "artist" && <FollowArtistButton artist={item} />}

        <Tooltip
          title={isSaved ? "Remove from your library" : "Add to your library"}
          placement="top"
        >
          {item?.type !== "artist" && !isSaved && (
            <TbCirclePlus className="min-h-7 min-w-7 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white" />
          )}
          {item?.type !== "artist" && isSaved === true && (
            <TbCircleCheckFilled className="min-h-7 min-w-7 cursor-pointer text-blue-600 duration-100 hover:scale-105" />
          )}
        </Tooltip>

        <TbDots className="min-h-6 min-w-6 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white" />
      </div>
    </div>
  );
}

export default PageMenu;
