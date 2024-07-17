import { RiCloseFill, RiMoreFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { togglePlayingTrackBar } from "../../../features/player/PlaybackSlice";

function PlayingTrackbarHeader() {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-2">
      <p className="text-sm font-semibold text-gray-900 dark:text-white">
        Houdini
      </p>
      <div className="flex items-center gap-2">
        <RiMoreFill className="min-h-8 min-w-8 cursor-pointer rounded-full p-1 text-gray-900 duration-100 hover:bg-blue-50 dark:text-white dark:hover:bg-glass-100" />
        <RiCloseFill
          onClick={() => dispatch(togglePlayingTrackBar())}
          className="min-h-8 min-w-8 cursor-pointer rounded-full p-1 text-gray-900 duration-100 hover:bg-blue-50 dark:text-white dark:hover:bg-glass-100"
        />
      </div>
    </div>
  );
}

export default PlayingTrackbarHeader;
