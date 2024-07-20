import PlaybackController from "./playback controller/PlaybackController";
import PlayerMenu from "./player menu/PlayerMenu";
import PlayerTrack from "./PlayerTrack";
import { TbCirclePlus } from "react-icons/tb";

function Player() {
  return (
    <div className="relative z-10 col-start-1 col-end-[-1] flex items-center justify-between gap-4 rounded-lg bg-white/40 px-7 py-2 text-black shadow-lg backdrop-blur-md dark:bg-black/40 dark:text-white">
      <div className="flex items-center gap-4">
        <PlayerTrack />
        <TbCirclePlus className="min-h-5 min-w-5 cursor-pointer text-black duration-100 hover:text-blue-600 dark:text-white" />
      </div>
      <PlaybackController />
      <PlayerMenu />
    </div>
  );
}

export default Player;
