import {
  TbArrowsShuffle,
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
  TbRepeat,
} from "react-icons/tb";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";
import useToggleShuffle from "../hooks/useToggleShuffle";
import useRepeat from "../hooks/useRepeat";
import { Tooltip } from "@mui/material";
function Controls() {
  const { playerState, player, currentTrack, deviceId } = usePlayerContext();
  const iconClassNames = `${currentTrack?.id && !playerState?.loading && "cursor-pointer hover:scale-105 hover:text-black dark:hover:text-white"} text-2xl text-black/70 transition-all duration-100 dark:text-white/70`;

  const { toggleShuffleMutate } = useToggleShuffle();
  const { repeatMutate } = useRepeat();

  function onRepeat() {
    if (!currentTrack?.id || playerState?.loading) return;
    repeatMutate({
      deviceId,
      state: playerState?.repeat_mode > 0 ? "off" : "track",
    });
  }
  function onToggleShuffle() {
    if (!currentTrack?.id || playerState?.loading) return;
    toggleShuffleMutate({ deviceId, state: !playerState?.shuffle });
  }

  return (
    <div className="flex items-center justify-center gap-5">
      <Tooltip title="Shuffle" placement="top">
        <div>
          <TbArrowsShuffle
            onClick={onToggleShuffle}
            className={`${iconClassNames} ${playerState?.shuffle ? "!text-blue-600" : ""}`}
          />
        </div>
      </Tooltip>
      <Tooltip title="Previous Track" placement="top">
        <div>
          <TbPlayerSkipBackFilled
            onClick={() =>
              currentTrack?.id && !playerState.loading
                ? player?.previousTrack()
                : null
            }
            className={iconClassNames}
          />
        </div>
      </Tooltip>
      <Tooltip title={playerState?.paused ? "Play" : "Pause"} placement="top">
        <div
          onClick={() =>
            currentTrack?.id && !playerState.loading
              ? player?.togglePlay()
              : null
          }
          className={`${currentTrack?.id && !playerState.loading ? "cursor-pointer hover:scale-105" : ""} min-h-10 min-w-10 rounded-full bg-blue-600 p-2 shadow-md transition-all duration-100`}
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
      </Tooltip>

      <Tooltip title="Next Track" placement="top">
        <div>
          <TbPlayerSkipForwardFilled
            onClick={() =>
              currentTrack?.id && !playerState.loading
                ? player?.nextTrack()
                : null
            }
            className={iconClassNames}
          />
        </div>
      </Tooltip>
      <Tooltip title="Repeat Track" placement="top">
        <div>
          <TbRepeat
            onClick={onRepeat}
            className={`${iconClassNames} ${playerState?.repeat_mode > 0 ? "!text-blue-600" : ""}`}
          />
        </div>
      </Tooltip>
    </div>
  );
}

export default Controls;
