import { useSelector } from "react-redux";
import PlayerTrack from "../tracks/PlayerTrack";
import PlaybackController from "./playback controller/PlaybackController";
import PlayerMenu from "./player menu/PlayerMenu";
import useCurrentlyPlayingTrack from "./useCurrentlyPlayingTrack";

function Player() {
  const { isSmall } = useSelector((store) => store.global);
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  return isSmall && currentlyPlayingTrack ? (
    <div className="absolute bottom-20 mb-2 flex w-full justify-center px-3">
      <div className="w-full rounded bg-blue-600/60 px-3 py-2 shadow backdrop-blur-lg">
        <PlayerTrack />
      </div>
    </div>
  ) : (
    <div className="relative z-10 col-start-1 col-end-[-1] hidden items-center justify-between gap-4 rounded-lg bg-white/50 px-5 py-2 text-black shadow-lg backdrop-blur-md md:flex dark:bg-black/50 dark:text-white">
      <PlayerTrack />
      <PlaybackController />
      <PlayerMenu />
    </div>
  );
}

export default Player;
