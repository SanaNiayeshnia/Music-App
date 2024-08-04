import { useSelector } from "react-redux";
import PlayingArtist from "../../../features/artists/PlayingArtist";
import PlayingTrack from "../../../features/tracks/PlayingTrack";
import PlayingTrackbarHeader from "./PlayingTrackbarHeader";
import useScrollbar from "../../../hooks/useScrollbar";
import QueueBar from "../../../features/player/queue/QueueBar";
import { useState } from "react";
import useCurrentlyPlayingTrack from "../../../features/player/useCurrentlyPlayingTrack";
import { TbMoodSad } from "react-icons/tb";

function PlayingTrackBar() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const ref = useScrollbar();
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();

  return (
    <div
      className={`${isPlayingTrackbarOpen ? "md:block" : "md:hidden"} relative hidden h-full min-w-60 overflow-hidden rounded-lg bg-white/50 shadow-lg backdrop-blur-md md:max-w-60 lg:min-w-72 lg:max-w-72 xl:max-w-80 dark:bg-black/50`}
    >
      {currentlyPlayingTrack ? (
        <>
          <div className="h-full">
            <PlayingTrackbarHeader isScrolled={isScrolled} />
            <div
              ref={ref}
              className="scrollbar hide-scroll h-[calc(100%-5rem)] space-y-6 overflow-auto px-3 pb-5"
              onScroll={(e) => setIsScrolled(e.target.scrollTop > 0)}
            >
              <PlayingTrack />
              <PlayingArtist />
            </div>
          </div>
          <QueueBar />
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center px-2 text-sm">
          <p className="flex items-center gap-1 font-medium text-black dark:text-white">
            Unable to load the queue
            <TbMoodSad className="h-5 w-5 text-black duration-100 dark:text-white" />
          </p>
          <p className="font-medium text-black dark:text-white">
            Start by playing a song.
          </p>
        </div>
      )}
    </div>
  );
}

export default PlayingTrackBar;
