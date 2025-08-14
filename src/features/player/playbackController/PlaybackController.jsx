import { usePlayerContext } from "../../../contexts/player/usePlayerContext";
import Controls from "./Controls";
import SongSlider from "./SongSlider";

function PlaybackController() {
  const { currentTrack, playerState } = usePlayerContext();
  return (
    <div
      className={`${!currentTrack?.id || playerState?.loading ? "opacity-50" : ""} flex w-8/12 flex-col md:w-5/12 lg:w-5/12`}
    >
      <Controls />
      <SongSlider />
    </div>
  );
}

export default PlaybackController;
