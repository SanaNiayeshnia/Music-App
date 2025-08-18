import VolumeHandler from "./VolumeHandler";
import {
  setIsFullScreenPlayingTrack,
  togglePlayingTrackBar,
  toggleQueueBar,
} from "../PlaybackSlice";
import { useDispatch, useSelector } from "react-redux";
import { TbArrowsDiagonal, TbPlaylist } from "react-icons/tb";
import { BiAlbum } from "react-icons/bi";
import { Tooltip } from "@mui/material";
import { usePlayerContext } from "../hooks/usePlayerContext";

function PlayerMenu() {
  const dispatch = useDispatch();
  const { isPlayingTrackbarOpen, isQueueBarOpen } = useSelector(
    (store) => store.playback,
  );
  const { currentTrack } = usePlayerContext();

  return (
    <div
      className={`${!currentTrack?.id && "opacity-50"} col-span-3 hidden items-center justify-end gap-4 md:flex`}
    >
      <Tooltip title="Currently playing view" placement="top">
        <div>
          <BiAlbum
            className={` ${currentTrack && isPlayingTrackbarOpen && !isQueueBarOpen ? "text-blue-600" : "text-black dark:text-white"} ${currentTrack?.id && "cursor-pointer"} min-h-5 min-w-5 duration-100`}
            onClick={() =>
              currentTrack?.id ? dispatch(togglePlayingTrackBar()) : null
            }
          />
        </div>
      </Tooltip>

      <Tooltip title="Queue" placement="top">
        <div>
          <TbPlaylist
            onClick={() =>
              currentTrack?.id ? dispatch(toggleQueueBar()) : null
            }
            className={`${isQueueBarOpen ? "text-blue-600" : "text-black dark:text-white"} ${currentTrack?.id && "cursor-pointer"} min-h-5 min-w-5 duration-100`}
          />
        </div>
      </Tooltip>

      <VolumeHandler />
      <TbArrowsDiagonal
        onClick={() =>
          currentTrack?.id ? dispatch(setIsFullScreenPlayingTrack(true)) : null
        }
        className={`${currentTrack?.id && "cursor-pointer hover:text-blue-600"} min-h-5 min-w-5 text-black duration-100 dark:text-white`}
      />
    </div>
  );
}

export default PlayerMenu;
