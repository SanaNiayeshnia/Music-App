import PlayerTrack from "../tracks/PlayerTrack";
import PlaybackController from "./playback controller/PlaybackController";
import PlayerMenu from "./player menu/PlayerMenu";

function Player() {
  return (
    <div className="relative z-10 col-start-1 col-end-[-1] flex items-center justify-between gap-4 rounded-lg bg-white/50 px-5 py-2 text-black shadow-lg backdrop-blur-md dark:bg-black/50 dark:text-white">
      <PlayerTrack />
      <PlaybackController />
      <PlayerMenu />
    </div>
  );
}

export default Player;
