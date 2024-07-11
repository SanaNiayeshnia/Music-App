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
    <div className="hidden items-center gap-3 text-gray-900 lg:flex dark:text-white">
      <RiMvLine
        className="min-h-5 min-w-5 cursor-pointer duration-100 hover:text-blue-600"
        onClick={() => dispatch(togglePlayingTrackBar())}
      />
      <RiPlayList2Fill className="min-h-5 min-w-5 cursor-pointer duration-100 hover:text-blue-600" />
      <VolumeHandler />
      <RiExpandDiagonalLine className="cursor-pointer duration-100 hover:text-blue-600" />
    </div>
  );
}

export default PlayerMenu;
