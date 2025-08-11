import PlayButton from "../../../ui/PlayButton";
import {
  TbArrowsShuffle,
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
  TbRepeat,
} from "react-icons/tb";
import { useDispatch } from "react-redux";
import { togglePlayingTrackBar } from "../PlaybackSlice";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";

function Controls() {
  const { currentTrack } = usePlayerContext();
  const dispatch = useDispatch();

  function handlePlay() {
    if (!currentTrack)
      dispatch(togglePlayingTrackBar()); //if there was no track playling, open the playing track bar to show the empty queue message.
    else return null;
  }

  return (
    <div className="flex items-center justify-center gap-5">
      <TbArrowsShuffle
        className={`${currentTrack && "cursor-pointer hover:scale-105"} text-2xl text-black transition-all duration-100 dark:text-white`}
      />
      <TbPlayerSkipBackFilled
        className={`${currentTrack && "cursor-pointer hover:scale-105"} text-2xl text-black transition-all duration-100 dark:text-white`}
      />
      <PlayButton className="text-3xl" onClick={handlePlay} uri="" />
      <TbPlayerSkipForwardFilled
        className={`${currentTrack && "cursor-pointer hover:scale-105"} text-2xl text-black transition-all duration-100 dark:text-white`}
      />
      <TbRepeat
        className={`${currentTrack && "cursor-pointer hover:scale-105"} text-2xl text-black transition-all duration-100 dark:text-white`}
      />
    </div>
  );
}

export default Controls;
