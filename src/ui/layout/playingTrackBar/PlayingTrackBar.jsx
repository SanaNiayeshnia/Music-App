import { useSelector } from "react-redux";
import PlayingArtist from "../../../features/artists/PlayingArtist";
import PlayingTrack from "../../../features/tracks/PlayingTrack";
import PlayingTrackbarHeader from "./PlayingTrackbarHeader";
import useScrollbar from "../../../hooks/useScrollbar";
import QueueBar from "../../../features/player/queue/QueueBar";

function PlayingTrackBar() {
  const { isPlayingTrackbarOpen, isQueueBarOpen } = useSelector(
    (store) => store.playback,
  );
  const ref = useScrollbar();

  return (
    <div
      className={`${isPlayingTrackbarOpen ? "md:block" : "md:hidden"} relative hidden h-full overflow-hidden rounded-md bg-white px-2 py-5 shadow-md md:max-w-[17rem] lg:max-w-72 xl:max-w-80 dark:bg-glass-100`}
    >
      <div className="space-y-6">
        <PlayingTrackbarHeader />
        <div
          ref={ref}
          className="scrollbar hide-scroll h-[calc(100%-2.2rem)] space-y-6 overflow-auto px-2"
        >
          <PlayingTrack />
          <PlayingArtist />
        </div>
      </div>

      <QueueBar />
    </div>
  );
}

export default PlayingTrackBar;
