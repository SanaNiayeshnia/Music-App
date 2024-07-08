import PlaybackController from "./playback controller/PlaybackController";
import PlayerMenu from "./player menu/PlayerMenu";
import PlayerTrack from "./PlayerTrack";

function Player() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between gap-4 bg-blue-50 px-8 py-2 text-gray-900 shadow-[0_-1px_3px_rgb(0,0,0,0.1)] dark:bg-black dark:text-white">
      <PlayerTrack />
      <PlaybackController />
      <PlayerMenu />
    </div>
  );
}

export default Player;
