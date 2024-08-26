import { useSelector } from "react-redux";
import SliderBar from "../../../ui/SliderBar";
import { formatTrackDuration } from "../../../utilities/helper";
import useCurrentlyPlayingTrack from "../hooks/useCurrentlyPlayingTrack";

function SongSlider() {
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();
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
        0:15
      </span>
      <SliderBar
        disabled={Boolean(!currentlyPlayingTrack)}
        thumbDisplay="off"
        valueLabelDisplay="off"
      />
      <span
        className={`${isFullScreenPlayingTrackOpen ? "text-black/70 dark:text-white/70" : "text-gray-600 dark:text-gray-300"} font-medium`}
      >
        {formatTrackDuration(currentlyPlayingTrack?.duration_ms || 0)}
      </span>
    </div>
  );
}

export default SongSlider;
