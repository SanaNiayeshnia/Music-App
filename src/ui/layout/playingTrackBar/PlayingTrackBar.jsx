import { useSelector } from "react-redux";
import PlayingArtist from "../../../features/artists/PlayingArtist";
import PlayingTrack from "../../../features/tracks/PlayingTrack";
import PlayingTrackbarHeader from "./PlayingTrackbarHeader";
import useScrollbar from "../../../hooks/useScrollbar";

function PlayingTrackBar() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const ref = useScrollbar();

  return (
    <div
      className={`${isPlayingTrackbarOpen ? "lg:block" : "lg:hidden"} hidden overflow-hidden rounded-md bg-white px-2 py-5 shadow-md lg:max-w-72 xl:max-w-80 dark:bg-glass-100`}
    >
      <div
        ref={ref}
        className="scrollbar hide-scroll max-h-[553px] space-y-6 overflow-scroll px-3"
      >
        <PlayingTrackbarHeader />
        <PlayingTrack />
        <PlayingArtist />
      </div>
    </div>
  );
}

export default PlayingTrackBar;
