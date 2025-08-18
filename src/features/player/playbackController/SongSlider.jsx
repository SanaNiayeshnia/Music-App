import { useSelector } from "react-redux";
import SliderBar from "../../../ui/SliderBar";
import { formatTrackDuration } from "../../../utilities/helper";
import { useEffect, useState } from "react";
import { usePlayerContext } from "../hooks/usePlayerContext";

function SongSlider({ displayLables = true, lightMode = false }) {
  const { playerState, currentTrack, player } = usePlayerContext();
  const { isFullScreenPlayingTrackOpen } = useSelector(
    (store) => store.playback,
  );
  const [position, setPosition] = useState(playerState?.position || 0);
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    if (!playerState) return;

    let animationFrame;
    const update = () => {
      if (!isSeeking) {
        if (!playerState.paused && !playerState?.loading) {
          const elapsed = Date.now() - playerState.lastUpdated;
          setPosition(playerState.position + elapsed);
        } else {
          setPosition(playerState.position);
        }
        animationFrame = requestAnimationFrame(update);
      }
    };
    update();

    return () => cancelAnimationFrame(animationFrame);
  }, [playerState, isSeeking]);

  function changePosition(value) {
    if (!currentTrack?.id) return null;
    setPosition(value);
  }

  async function onSeek(value) {
    if (playerState.paused) {
      await player.seek(value);
    } else {
      setIsSeeking(true);
      await player.seek(value);
      setPosition(value);
      setTimeout(() => {
        setIsSeeking(false);
      }, 5000);
    }
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`flex items-center gap-2 ${isFullScreenPlayingTrackOpen ? "text-base" : "text-sm"}`}
    >
      {displayLables && (
        <span
          className={`${isFullScreenPlayingTrackOpen ? "text-black/70 dark:text-white/70" : "text-gray-600 dark:text-gray-300"} font-medium`}
        >
          {formatTrackDuration(position || 0)}
        </span>
      )}

      <SliderBar
        disabled={!currentTrack?.id || playerState?.loading}
        thumbDisplay="off"
        valueLabelDisplay="off"
        value={position || 0}
        max={currentTrack?.duration_ms || 0}
        onChange={changePosition}
        onChangeCommitted={onSeek}
        lightMode={lightMode}
      />
      {displayLables && (
        <span
          className={`${isFullScreenPlayingTrackOpen ? "text-black/70 dark:text-white/70" : "text-gray-600 dark:text-gray-300"} font-medium`}
        >
          {formatTrackDuration(currentTrack?.duration_ms || 0)}
        </span>
      )}
    </div>
  );
}

export default SongSlider;
