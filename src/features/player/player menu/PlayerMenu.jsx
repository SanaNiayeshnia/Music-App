import {
  RiExpandDiagonalLine,
  RiMvLine,
  RiPlayList2Fill,
} from "react-icons/ri";
import VolumeHandler from "./VolumeHandler";
import { togglePlayingTrackBar } from "../PlaybackSlice";
import { useDispatch } from "react-redux";

function PlayerMenu() {
  const dispatch = useDispatch();
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <RiMvLine
        className="min-h-5 min-w-5 cursor-pointer text-gray-900 duration-100 hover:text-blue-600 dark:text-white"
        onClick={() => dispatch(togglePlayingTrackBar())}
      />
      <RiPlayList2Fill className="min-h-5 min-w-5 cursor-pointer text-gray-900 duration-100 hover:text-blue-600 dark:text-white" />
      <VolumeHandler />
      <RiExpandDiagonalLine className="cursor-pointer text-gray-900 duration-100 hover:text-blue-600 dark:text-white" />
    </div>
  );
}

export default PlayerMenu;
