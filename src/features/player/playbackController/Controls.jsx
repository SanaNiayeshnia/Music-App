import PlayButton from "../../../ui/PlayButton";
import {
  TbArrowsShuffle,
  TbPlayerSkipBackFilled,
  TbPlayerSkipForwardFilled,
  TbRepeat,
} from "react-icons/tb";
import useCurrentlyPlayingTrack from "../hooks/useCurrentlyPlayingTrack";
import { useDispatch } from "react-redux";
import { togglePlayingTrackBar } from "../PlaybackSlice";
function Controls() {
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  const dispatch = useDispatch();

  function handlePlay() {
    if (!currentlyPlayingTrack)
      dispatch(togglePlayingTrackBar()); //if there was no track playling, open the playing track bar to show the empty queue message.
    else return null;
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <TbArrowsShuffle
        className={`${currentlyPlayingTrack && "cursor-pointer hover:scale-105"} text-2xl text-black transition-all duration-100 dark:text-white`}
      />
      <TbPlayerSkipBackFilled
        className={`${currentlyPlayingTrack && "cursor-pointer hover:scale-105"} text-2xl text-black transition-all duration-100 dark:text-white`}
      />
      <PlayButton className="text-3xl" onClick={handlePlay} />
      <TbPlayerSkipForwardFilled
        className={`${currentlyPlayingTrack && "cursor-pointer hover:scale-105"} text-2xl text-black transition-all duration-100 dark:text-white`}
      />
      <TbRepeat
        className={`${currentlyPlayingTrack && "cursor-pointer hover:scale-105"} text-2xl text-black transition-all duration-100 dark:text-white`}
      />
    </div>
  );
}

export default Controls;
