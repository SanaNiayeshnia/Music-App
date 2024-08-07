import { useDispatch } from "react-redux";
import { togglePlayingTrackBar } from "../../../features/player/PlaybackSlice";
import { TbDots, TbX } from "react-icons/tb";
import useCurrentlyPlayingTrack from "../../../features/player/useCurrentlyPlayingTrack";
import Skeleton from "../../Skeleton";

function PlayingTrackbarHeader({ isScrolled }) {
  const dispatch = useDispatch();
  const { isLoading, currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  return (
    <div
      className={`${isScrolled && "bg-white/70 shadow backdrop-blur-3xl dark:bg-black/70"} flex items-center justify-between px-3 py-6`}
    >
      {isLoading ? (
        <Skeleton className="h-4 w-32" />
      ) : (
        <p className="text-sm font-semibold text-black dark:text-white">
          {currentlyPlayingTrack?.context?.name}
        </p>
      )}

      <div className="flex items-center gap-2">
        <TbDots
          className={`${!currentlyPlayingTrack && "hidden"} min-h-7 min-w-7 cursor-pointer rounded-full p-1 text-black duration-100 hover:scale-105 hover:bg-white hover:shadow dark:text-white dark:hover:bg-black`}
        />
        <TbX
          onClick={() => dispatch(togglePlayingTrackBar())}
          className="min-h-7 min-w-7 cursor-pointer rounded-full p-1 text-black duration-100 hover:scale-105 hover:bg-white hover:shadow dark:text-white dark:hover:bg-black"
        />
      </div>
    </div>
  );
}

export default PlayingTrackbarHeader;
