import PlayButton from "../../../ui/PlayButton";
import {
  TbArrowsShuffle,
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
  TbRepeat,
} from "react-icons/tb";
import useCurrentlyPlayingTrack from "../hooks/useCurrentlyPlayingTrack";
import { useDispatch } from "react-redux";
import { togglePlayingTrackBar } from "../PlaybackSlice";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";
function Controls() {
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  const dispatch = useDispatch();
  const { playerState, player, currentTrack } = usePlayerContext();

  function handlePlay() {
    if (!currentlyPlayingTrack)
      dispatch(togglePlayingTrackBar()); //if there was no track playling, open the playing track bar to show the empty queue message.
    else return null;
  }

  return (
    <div className="flex items-center justify-center gap-5">
      <TbPlayerSkipBackFilled
        onClick={() => player?.previousTrack()}
        className={`${currentlyPlayingTrack && "cursor-pointer hover:scale-105 hover:text-black dark:hover:text-white"} text-2xl text-black/70 transition-all duration-100 dark:text-white/70`}
      />
      <div
        onClick={() => player?.togglePlay()}
        className={`min-h-10 min-w-10 rounded-full bg-blue-600 p-2 shadow-md hover:scale-105`}
      >
        {playerState?.paused ? (
          <TbPlayerPlayFilled
            className={`h-full w-full cursor-pointer text-white transition-all duration-100`}
          />
        ) : (
          <TbPlayerPauseFilled
            className={`h-full w-full cursor-pointer text-white transition-all duration-100`}
          />
        )}
      </div>
      <TbPlayerSkipForwardFilled
        onClick={() => player?.nextTrack()}
        className={`${currentlyPlayingTrack && "cursor-pointer hover:scale-105 hover:text-black dark:hover:text-white"} text-2xl text-black/70 transition-all duration-100 dark:text-white/70`}
      />
    </div>
  );
}

export default Controls;
