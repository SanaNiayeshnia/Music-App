import PlaybackController from "./playback controller/PlaybackController";
import PlayerMenu from "./player menu/PlayerMenu";
import PlayerTrack from "./PlayerTrack";

function Player() {
  return (
    <div className="z-10 col-start-1 col-end-[-1] flex items-center justify-between gap-4 bg-blue-50 px-7 pt-2 text-gray-900 dark:bg-black dark:text-white">
      <PlayerTrack />
      <PlaybackController />
      <PlayerMenu />
    </div>
  );
}

export default Player;
