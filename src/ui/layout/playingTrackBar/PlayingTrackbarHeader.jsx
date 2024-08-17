import { useDispatch } from "react-redux";
import { togglePlayingTrackBar } from "../../../features/player/PlaybackSlice";
import { TbDots, TbX } from "react-icons/tb";
import useCurrentlyPlayingTrack from "../../../features/player/useCurrentlyPlayingTrack";
import Skeleton from "../../Skeleton";
import { useNavigate } from "react-router-dom";
import TrackContextMenu from "../../../features/tracks/TrackContextMenu";

function PlayingTrackbarHeader({ isScrolled }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  return (
    <div
      className={`${isScrolled && "bg-white/70 shadow backdrop-blur-3xl dark:bg-black/70"} flex items-center justify-between px-3 py-6`}
    >
      {isLoading ? (
        <Skeleton className="h-4 w-32" />
      ) : (
        <p
          className="cursor-pointer text-sm font-semibold text-black hover:underline dark:text-white"
          onClick={() => {
            navigate(
              `/${currentlyPlayingTrack?.context?.type}/${currentlyPlayingTrack?.context?.id}`,
            );
          }}
        >
          {currentlyPlayingTrack?.context?.name}
        </p>
      )}

      <div className="flex items-center gap-2">
        <div className={`${!currentlyPlayingTrack && "hidden"}`}>
          <TrackContextMenu track={currentlyPlayingTrack} />
        </div>
        <TbX
          onClick={() => dispatch(togglePlayingTrackBar())}
          className="min-h-7 min-w-7 cursor-pointer rounded-full p-1 text-black duration-100 hover:scale-105 hover:bg-white hover:shadow dark:text-white dark:hover:bg-black"
        />
      </div>
    </div>
  );
}

export default PlayingTrackbarHeader;
