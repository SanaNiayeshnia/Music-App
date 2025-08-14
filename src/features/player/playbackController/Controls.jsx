import {
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
} from "react-icons/tb";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";
function Controls() {
  const { playerState, player, currentTrack } = usePlayerContext();

  return (
    <div className="flex items-center justify-center gap-5">
      <TbPlayerSkipBackFilled
        onClick={() => (currentTrack?.id ? player?.previousTrack() : null)}
        className={`${currentTrack?.id && "cursor-pointer hover:scale-105 hover:text-black dark:hover:text-white"} text-2xl text-black/70 transition-all duration-100 dark:text-white/70`}
      />
      <div
        onClick={() => (currentTrack?.id ? player?.togglePlay() : null)}
        className={`${currentTrack?.id ? "cursor-pointer hover:scale-105" : ""} min-h-10 min-w-10 rounded-full bg-blue-600 p-2 shadow-md transition-all duration-100`}
      >
        {playerState?.paused ? (
          <TbPlayerPlayFilled
            className={`h-full w-full text-white transition-all duration-100`}
          />
        ) : (
          <TbPlayerPauseFilled
            className={`c h-full w-full text-white transition-all duration-100`}
          />
        )}
      </div>
      <TbPlayerSkipForwardFilled
        onClick={() => (currentTrack?.id ? player?.nextTrack() : null)}
        className={`${currentTrack?.id && "cursor-pointer hover:scale-105 hover:text-black dark:hover:text-white"} text-2xl text-black/70 transition-all duration-100 dark:text-white/70`}
      />
    </div>
  );
}

export default Controls;
