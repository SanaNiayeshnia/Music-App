import { useSelector } from "react-redux";
import SliderBar from "../../../ui/SliderBar";
import { formatTrackDuration } from "../../../utilities/helper";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";

function SongSlider() {
  const { currentTrack, playerState } = usePlayerContext();
  const { isFullScreenPlayingTrackOpen } = useSelector(
    (store) => store.playback,
  );

  return (
    <div
      className={`flex items-center gap-2 ${isFullScreenPlayingTrackOpen ? "text-base" : "text-sm"}`}
    >
      <span
        className={`${isFullScreenPlayingTrackOpen ? "text-black/70 dark:text-white/70" : "text-gray-600 dark:text-gray-300"} font-medium`}
      >
        {formatTrackDuration(playerState?.position)}
      </span>
      <SliderBar
        disabled={Boolean(!currentTrack)}
        thumbDisplay="off"
        valueLabelDisplay="off"
        value={Math.ceil((playerState?.position / playerState?.duration) * 100)}
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
