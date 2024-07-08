import {
  RiExpandDiagonalLine,
  RiMvLine,
  RiPlayList2Fill,
} from "react-icons/ri";
import VolumeHandler from "./VolumeHandler";

function PlayerMenu() {
  return (
    <div className="hidden items-center gap-3 text-gray-900 md:flex dark:text-white">
      <RiMvLine className="min-h-5 min-w-5 cursor-pointer hover:text-blue-600" />
      <RiPlayList2Fill className="min-h-5 min-w-5 cursor-pointer hover:text-blue-600" />
      <VolumeHandler />
      <RiExpandDiagonalLine className="cursor-pointer hover:text-blue-600" />
    </div>
  );
}

export default PlayerMenu;
