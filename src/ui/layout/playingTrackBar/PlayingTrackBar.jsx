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
      ref={ref}
      className={`${isPlayingTrackbarOpen ? "md:block" : "md:hidden"} scrollbar hide-scroll hidden h-full space-y-6 overflow-auto rounded-md bg-white px-5 py-5 shadow-md md:max-w-[17rem] lg:max-w-72 xl:max-w-80 dark:bg-glass-100`}
    >
      <PlayingTrackbarHeader />
      <PlayingTrack />
      <PlayingArtist />
    </div>
  );
}

export default PlayingTrackBar;
