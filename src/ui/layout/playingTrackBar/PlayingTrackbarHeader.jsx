import { RiCloseFill, RiMoreFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { togglePlayingTrackBar } from "../../../features/player/PlaybackSlice";

function PlayingTrackbarHeader({ isScrolled }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`${isScrolled && "bg-white/80 shadow backdrop-blur-3xl dark:bg-black/80"} flex items-center justify-between px-3 pb-6 pt-5`}
    >
      <p className="text-sm font-semibold text-black dark:text-white">
        Houdini
      </p>
      <div className="flex items-center gap-2">
        <RiMoreFill className="min-h-8 min-w-8 cursor-pointer rounded-full p-1 text-black duration-100 hover:scale-105 hover:bg-white hover:shadow dark:text-white dark:hover:bg-black" />
        <RiCloseFill
          onClick={() => dispatch(togglePlayingTrackBar())}
          className="min-h-8 min-w-8 cursor-pointer rounded-full p-1 text-black duration-100 hover:scale-105 hover:bg-white hover:shadow dark:text-white dark:hover:bg-black"
        />
      </div>
    </div>
  );
}

export default PlayingTrackbarHeader;
