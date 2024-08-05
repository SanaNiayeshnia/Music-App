import { useSelector } from "react-redux";
import PlayingArtist from "../../../features/artists/PlayingArtist";
import PlayingTrack from "../../../features/tracks/PlayingTrack";
import PlayingTrackbarHeader from "./PlayingTrackbarHeader";
import useScrollbar from "../../../hooks/useScrollbar";
import QueueBar from "../../../features/player/queue/QueueBar";
import { useState } from "react";
import useCurrentlyPlayingTrack from "../../../features/player/useCurrentlyPlayingTrack";
import TrackBarError from "./TrackBarError";

function PlayingTrackBar() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const ref = useScrollbar();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoading, currentlyPlayingTrack } = useCurrentlyPlayingTrack();

  return (
    <div
      className={`${isPlayingTrackbarOpen ? "md:block" : "md:hidden"} relative hidden h-full min-w-60 overflow-hidden rounded-lg bg-white/50 shadow-lg backdrop-blur-md md:max-w-60 lg:min-w-72 lg:max-w-72 xl:min-w-80 xl:max-w-80 dark:bg-black/50`}
    >
      <div className="h-full">
        <PlayingTrackbarHeader isScrolled={isScrolled} />
        <div
          ref={ref}
          className="scrollbar hide-scroll h-[calc(100%-5rem)] space-y-6 overflow-auto px-3 pb-5"
          onScroll={(e) => setIsScrolled(e.target.scrollTop > 0)}
        >
          {!isLoading && !currentlyPlayingTrack ? (
            <TrackBarError />
          ) : (
            <>
              <PlayingTrack />
              <PlayingArtist />
            </>
          )}
        </div>
      </div>

      <QueueBar />
    </div>
  );
}

export default PlayingTrackBar;
