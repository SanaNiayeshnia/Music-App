import {
  RiDiscLine,
  RiExpandDiagonalLine,
  RiPlayList2Fill,
} from "react-icons/ri";
import VolumeHandler from "./VolumeHandler";
import { togglePlayingTrackBar, toggleQueueBar } from "../PlaybackSlice";
import { useDispatch, useSelector } from "react-redux";
import { TbArrowsDiagonal, TbPlaylist } from "react-icons/tb";
import { BiAlbum } from "react-icons/bi";

function PlayerMenu() {
  const dispatch = useDispatch();
  const { isPlayingTrackbarOpen, isQueueBarOpen } = useSelector(
    (store) => store.playback,
  );
  return (
    <div className="hidden max-w-52 items-center gap-3 md:flex">
      <BiAlbum
        className={`${isPlayingTrackbarOpen && !isQueueBarOpen ? "text-blue-600" : "text-black dark:text-white"} min-h-5 min-w-5 cursor-pointer duration-100`}
        onClick={() => dispatch(togglePlayingTrackBar())}
      />
      <TbPlaylist
        onClick={() => dispatch(toggleQueueBar())}
        className={`${isQueueBarOpen ? "text-blue-600" : "text-black dark:text-white"} min-h-5 min-w-5 cursor-pointer duration-100`}
      />
      <VolumeHandler />
      <TbArrowsDiagonal className="min-h-5 min-w-5 cursor-pointer text-black duration-100 hover:text-blue-600 dark:text-white" />
    </div>
  );
}

export default PlayerMenu;
