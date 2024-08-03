import PlayButton from "../../../ui/PlayButton";
import {
  TbArrowsShuffle,
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
  TbRepeat,
} from "react-icons/tb";
function Controls() {
  return (
    <div className="flex items-center justify-center gap-3">
      <TbArrowsShuffle className="cursor-pointer text-2xl text-black transition-all duration-100 hover:scale-105 dark:text-white" />
      <TbPlayerSkipBackFilled className="cursor-pointer text-2xl text-black transition-all duration-100 hover:scale-105 dark:text-white" />
      <PlayButton className="text-3xl" />
      <TbPlayerSkipForwardFilled className="cursor-pointer text-2xl text-black transition-all duration-100 hover:scale-105 dark:text-white" />
      <TbRepeat className="cursor-pointer text-2xl text-black transition-all duration-100 hover:scale-105 dark:text-white" />
    </div>
  );
}

export default Controls;
