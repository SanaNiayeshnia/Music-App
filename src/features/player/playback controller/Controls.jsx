import {
  RiPlayCircleFill,
  RiRepeat2Fill,
  RiShuffleFill,
  RiSkipBackFill,
  RiSkipForwardFill,
} from "react-icons/ri";
import PlayButton from "../../../ui/PlayButton";
function Controls() {
  return (
    <div className="flex items-center justify-center gap-3">
      <RiShuffleFill className="min-h-6 min-w-6 cursor-pointer text-black/80 duration-100 hover:text-black dark:text-white/80 dark:hover:text-white" />
      <RiSkipBackFill className="min-h-6 min-w-6 cursor-pointer text-black/80 duration-100 hover:text-black dark:text-white/80 dark:hover:text-white" />
      <PlayButton className="min-h-10 min-w-10" />
      <RiSkipForwardFill className="min-h-6 min-w-6 cursor-pointer text-black/80 duration-100 hover:text-black dark:text-white/80 dark:hover:text-white" />
      <RiRepeat2Fill className="min-h-6 min-w-6 cursor-pointer text-black/80 duration-100 hover:text-black dark:text-white/80 dark:hover:text-white" />
    </div>
  );
}

export default Controls;
