import { useDispatch } from "react-redux";
import { togglePlayingTrackBar } from "../../../features/player/PlaybackSlice";
import { TbX } from "react-icons/tb";
import Skeleton from "../../Skeleton";
import { useNavigate } from "react-router-dom";
import TrackContextMenu from "../../../features/tracks/TrackContextMenu";
import { usePlayerContext } from "../../../features/player/hooks/usePlayerContext";

function PlayingTrackbarHeader({ isScrolled }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentTrack, playerState } = usePlayerContext();
  const contextSplitArray = playerState?.context?.uri?.split(":");

  return (
    <div
      className={`${isScrolled && "bg-white/50 shadow backdrop-blur-lg dark:bg-black/50"} flex items-center justify-between px-3 py-6`}
    >
      {!currentTrack ? (
        <Skeleton className="h-4 w-32 rounded-sm" />
      ) : (
        <p
          className="cursor-pointer text-sm font-semibold text-black hover:underline dark:text-white"
          onClick={() => {
            navigate(
              `/${contextSplitArray?.[1] || "track"}/${contextSplitArray?.[2] || currentTrack?.id}`,
            );
          }}
        >
          {playerState?.context?.metadata?.context_description ||
            currentTrack?.name}
        </p>
      )}

      <div className="flex items-center gap-2">
        <div className={`${!currentTrack && "hidden"}`}>
          <TrackContextMenu track={currentTrack} position="center" />
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
