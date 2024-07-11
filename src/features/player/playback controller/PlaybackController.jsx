import Controls from "./Controls";
import SongSlider from "./SongSlider";

function PlaybackController() {
  return (
    <div className="flex w-8/12 flex-col lg:w-5/12">
      <Controls />
      <SongSlider />
    </div>
  );
}

export default PlaybackController;
