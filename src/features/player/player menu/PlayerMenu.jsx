import {
  RiDiscLine,
  RiExpandDiagonalLine,
  RiPlayList2Fill,
} from "react-icons/ri";
import VolumeHandler from "./VolumeHandler";
import { togglePlayingTrackBar } from "../PlaybackSlice";
import { useDispatch, useSelector } from "react-redux";

function PlayerMenu() {
  const dispatch = useDispatch();
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <div className="hidden items-center gap-3 md:flex">
      <RiDiscLine
        className={`${isPlayingTrackbarOpen ? "text-blue-600" : "text-gray-900 dark:text-white"} min-h-5 min-w-5 cursor-pointer duration-100`}
        onClick={() => dispatch(togglePlayingTrackBar())}
      />
      <RiPlayList2Fill className="min-h-5 min-w-5 cursor-pointer text-gray-900 duration-100 hover:text-blue-600 dark:text-white" />
      <VolumeHandler />
      <RiExpandDiagonalLine className="cursor-pointer text-gray-900 duration-100 hover:text-blue-600 dark:text-white" />
    </div>
  );
}

export default PlayerMenu;
