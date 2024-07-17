import { RiAddCircleLine } from "react-icons/ri";
import PlaybackController from "./playback controller/PlaybackController";
import PlayerMenu from "./player menu/PlayerMenu";
import PlayerTrack from "./PlayerTrack";

function Player() {
  return (
    <div className="z-10 col-start-1 col-end-[-1] flex items-center justify-between gap-4 bg-blue-100 px-7 pt-2 text-gray-900 dark:bg-black dark:text-white">
      <div className="flex items-center gap-4">
        <PlayerTrack />
        <RiAddCircleLine className="min-h-5 min-w-5 cursor-pointer text-gray-900 duration-100 hover:text-blue-600 dark:text-white" />
      </div>
      <PlaybackController />
      <PlayerMenu />
    </div>
  );
}

export default Player;
