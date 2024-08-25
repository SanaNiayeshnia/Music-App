import { useSelector } from "react-redux";
import PlayerTrack from "../tracks/PlayerTrack";
import Controls from "./playback controller/Controls";
import SongSlider from "./playback controller/SongSlider";
import VolumeHandler from "./player menu/VolumeHandler";
import SaveTrackButton from "../tracks/SaveTrackButton";

function FullScreenPlayingTrack() {
  const { isFullScreenPlayingTrackOpen } = useSelector(
    (store) => store.playback,
  );
  return (
    <div
      className={`${!isFullScreenPlayingTrackOpen && "hidden"} absolute inset-0 z-50 grid place-items-center bg-blue-200 px-5 py-5`}
    >
      <PlayerTrack fullScreen />
      <div className="flex w-full flex-col">
        <SongSlider />
        <div className="flex w-full items-center justify-between">
          <div className="flex w-32 justify-start">
            <SaveTrackButton className="h-6 w-6" />
          </div>
          <Controls />
          <div className="flex w-32 justify-end">
            <VolumeHandler />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenPlayingTrack;
