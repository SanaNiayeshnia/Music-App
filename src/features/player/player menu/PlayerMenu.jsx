import VolumeHandler from "./VolumeHandler";
import { togglePlayingTrackBar, toggleQueueBar } from "../PlaybackSlice";
import { useDispatch, useSelector } from "react-redux";
import { TbArrowsDiagonal, TbPlaylist } from "react-icons/tb";
import { BiAlbum } from "react-icons/bi";
import useCurrentlyPlayingTrack from "../useCurrentlyPlayingTrack";

function PlayerMenu() {
  const dispatch = useDispatch();
  const { isPlayingTrackbarOpen, isQueueBarOpen } = useSelector(
    (store) => store.playback,
  );
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();

  return (
    <div
      className={`${!currentlyPlayingTrack && "opacity-50"} hidden max-w-52 items-center gap-3 md:flex`}
    >
      <BiAlbum
        className={` ${currentlyPlayingTrack && isPlayingTrackbarOpen && !isQueueBarOpen ? "text-blue-600" : "text-black dark:text-white"} ${currentlyPlayingTrack && "cursor-pointer"} min-h-5 min-w-5 duration-100`}
        onClick={() =>
          currentlyPlayingTrack ? dispatch(togglePlayingTrackBar()) : null
        }
      />
      <TbPlaylist
        onClick={() =>
          currentlyPlayingTrack ? dispatch(toggleQueueBar()) : null
        }
        className={`${isQueueBarOpen ? "text-blue-600" : "text-black dark:text-white"} ${currentlyPlayingTrack && "cursor-pointer"} min-h-5 min-w-5 duration-100`}
      />
      <VolumeHandler />
      <TbArrowsDiagonal
        className={`${currentlyPlayingTrack && "cursor-pointer hover:text-blue-600"} min-h-5 min-w-5 text-black duration-100 dark:text-white`}
      />
    </div>
  );
}

export default PlayerMenu;
