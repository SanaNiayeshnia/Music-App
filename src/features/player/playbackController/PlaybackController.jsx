import { usePlayerContext } from "../../../contexts/player/usePlayerContext";
import Controls from "./Controls";
import SongSlider from "./SongSlider";

function PlaybackController() {
  const { currentTrack, playerState } = usePlayerContext();
  return (
    <div
      className={`${!currentTrack?.id || playerState?.loading ? "opacity-50" : ""} col-span-6 flex flex-col px-8`}
    >
      <Controls />
      <SongSlider />
    </div>
  );
}

export default PlaybackController;
