import SliderBar from "../../../ui/SliderBar";
import { formatTrackDuration } from "../../../utilities/helper";
import useCurrentlyPlayingTrack from "../useCurrentlyPlayingTrack";

function SongSlider() {
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-600 dark:text-gray-300">0:15</span>
      <SliderBar
        disabled={Boolean(!currentlyPlayingTrack)}
        thumbDisplay="off"
        valueLabelDisplay="off"
      />
      <span className="text-gray-600 dark:text-gray-300">
        {formatTrackDuration(currentlyPlayingTrack?.duration_ms || 0)}
      </span>
    </div>
  );
}

export default SongSlider;
