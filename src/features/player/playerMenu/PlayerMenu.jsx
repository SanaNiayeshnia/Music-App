import VolumeHandler from "./VolumeHandler";
import {
  toggleIsFullScreenPlayingTrack,
  togglePlayingTrackBar,
  toggleQueueBar,
} from "../PlaybackSlice";
import { useDispatch, useSelector } from "react-redux";
import { TbArrowsDiagonal, TbPlaylist } from "react-icons/tb";
import { BiAlbum } from "react-icons/bi";
import useCurrentlyPlayingTrack from "../hooks/useCurrentlyPlayingTrack";
import { Tooltip } from "@mui/material";

function PlayerMenu() {
  const dispatch = useDispatch();
  const { isPlayingTrackbarOpen, isQueueBarOpen } = useSelector(
    (store) => store.playback,
  );
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();

  return (
    <div
      className={`${!currentlyPlayingTrack && "opacity-50"} hidden w-60 items-center justify-between gap-3 md:flex`}
    >
      <Tooltip title="Currently playing view" placement="top">
        <div>
          <BiAlbum
            className={` ${currentlyPlayingTrack && isPlayingTrackbarOpen && !isQueueBarOpen ? "text-blue-600" : "text-black dark:text-white"} ${currentlyPlayingTrack && "cursor-pointer"} min-h-5 min-w-5 duration-100`}
            onClick={() =>
              currentlyPlayingTrack ? dispatch(togglePlayingTrackBar()) : null
            }
          />
        </div>
      </Tooltip>

      <Tooltip title="Queue" placement="top">
        <div>
          <TbPlaylist
            onClick={() =>
              currentlyPlayingTrack ? dispatch(toggleQueueBar()) : null
            }
            className={`${isQueueBarOpen ? "text-blue-600" : "text-black dark:text-white"} ${currentlyPlayingTrack && "cursor-pointer"} min-h-5 min-w-5 duration-100`}
          />
        </div>
      </Tooltip>

      <VolumeHandler />
      <TbArrowsDiagonal
        onClick={() =>
          currentlyPlayingTrack
            ? dispatch(toggleIsFullScreenPlayingTrack())
            : null
        }
        className={`${currentlyPlayingTrack && "cursor-pointer hover:text-blue-600"} min-h-5 min-w-5 text-black duration-100 dark:text-white`}
      />
    </div>
  );
}

export default PlayerMenu;
