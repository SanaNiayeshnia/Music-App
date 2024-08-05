import useCurrentlyPlayingTrack from "../useCurrentlyPlayingTrack";
import Controls from "./Controls";
import SongSlider from "./SongSlider";

function PlaybackController() {
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  return (
    <div
      className={`${!currentlyPlayingTrack && "opacity-50"} flex w-8/12 flex-col md:w-5/12 lg:w-5/12`}
    >
      <Controls />
      <SongSlider />
    </div>
  );
}

export default PlaybackController;
