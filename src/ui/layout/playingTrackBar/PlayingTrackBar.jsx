import { useSelector } from "react-redux";
import PlayingArtist from "../../../features/artists/PlayingArtist";
import PlayingTrack from "../../../features/tracks/PlayingTrack";
import PlayingTrackbarHeader from "./PlayingTrackbarHeader";

function PlayingTrackBar() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);

  return (
    <div
      className={`${isPlayingTrackbarOpen ? "lg:block" : "lg:hidden"} scrollbar hidden space-y-6 overflow-auto rounded-md bg-white px-4 py-5 shadow-md lg:max-w-72 xl:max-w-80 dark:bg-glass-100`}
    >
      <PlayingTrackbarHeader />
      <PlayingTrack />
      <PlayingArtist />
    </div>
  );
}

export default PlayingTrackBar;
