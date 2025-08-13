import { useSelector } from "react-redux";
import SliderBar from "../../../ui/SliderBar";
import { formatTrackDuration } from "../../../utilities/helper";
import { useEffect, useState } from "react";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";

function SongSlider() {
  const { playerState, currentTrack, player } = usePlayerContext();
  const { isFullScreenPlayingTrackOpen } = useSelector(
    (store) => store.playback,
  );
  const [position, setPosition] = useState(playerState?.position || 0);

  useEffect(() => {
    if (!playerState) return;

    let animationFrame;
    const update = () => {
      if (!playerState.paused) {
        const elapsed = Date.now() - playerState.lastUpdated;
        setPosition(playerState.position + elapsed);
      } else {
        setPosition(playerState.position);
      }
      animationFrame = requestAnimationFrame(update);
    };
    update();

    return () => cancelAnimationFrame(animationFrame);
  }, [playerState]);

  function changePosition(value) {
    player.seek(value);
    setPosition(value);
  }

  return (
    <div
      className={`flex items-center gap-2 ${isFullScreenPlayingTrackOpen ? "text-base" : "text-sm"}`}
    >
      <span
        className={`${isFullScreenPlayingTrackOpen ? "text-black/70 dark:text-white/70" : "text-gray-600 dark:text-gray-300"} font-medium`}
      >
        {position ? formatTrackDuration(position) : "0:00"}
      </span>
      <SliderBar
        disabled={Boolean(!currentTrack)}
        thumbDisplay="off"
        valueLabelDisplay="off"
        value={position || 0}
        max={currentTrack?.duration_ms || 0}
        onChange={changePosition}
      />
      <span
        className={`${isFullScreenPlayingTrackOpen ? "text-black/70 dark:text-white/70" : "text-gray-600 dark:text-gray-300"} font-medium`}
      >
        {formatTrackDuration(currentTrack?.duration_ms || 0)}
      </span>
    </div>
  );
}

export default SongSlider;
