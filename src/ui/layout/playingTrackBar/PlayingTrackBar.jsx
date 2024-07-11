import PlayingArtist from "../../../features/artists/PlayingArtist";
import PlayingTrack from "../../../features/tracks/PlayingTrack";
import PlayingTrackbarHeader from "./PlayingTrackbarHeader";

function PlayingTrackBar() {
  return (
    <div className="scrollbar col-start-3 row-start-1 row-end-3 space-y-6 overflow-auto rounded-md bg-white px-4 py-5 shadow-md dark:bg-glass-100">
      <PlayingTrackbarHeader />
      <PlayingTrack />
      <PlayingArtist />
    </div>
  );
}

export default PlayingTrackBar;
