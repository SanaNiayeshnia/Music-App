import { useDispatch, useSelector } from "react-redux";
import PlayerTrack from "../tracks/PlayerTrack";
import Controls from "./playback controller/Controls";
import SongSlider from "./playback controller/SongSlider";
import VolumeHandler from "./player menu/VolumeHandler";
import SaveTrackButton from "../tracks/SaveTrackButton";
import {
  TbArrowDown,
  TbArrowsDiagonalMinimize2,
  TbChevronDown,
} from "react-icons/tb";
import { toggleIsFullScreenPlayingTrack } from "./PlaybackSlice";
import IconLogo from "../../ui/IconLogo";
import useCurrentlyPlayingTrack from "./useCurrentlyPlayingTrack";
import TrackContextMenu from "../tracks/TrackContextMenu";
import { useNavigate } from "react-router-dom";

function FullScreenPlayingTrack() {
  const { isFullScreenPlayingTrackOpen } = useSelector(
    (store) => store.playback,
  );
  const { isSmall } = useSelector((store) => store.global);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  function close() {
    dispatch(toggleIsFullScreenPlayingTrack());
  }

  return (
    <div
      style={{
        backgroundImage: `url(${currentlyPlayingTrack?.album?.images[0]?.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={`${isFullScreenPlayingTrackOpen ? "inset-0 opacity-100" : "left-0 right-0 top-full opacity-0 md:inset-0 md:hidden"} absolute z-40 transition-all duration-500`}
    >
      <div className="absolute inset-0 z-50 grid place-items-center bg-white/50 px-8 backdrop-blur-lg dark:bg-black/50">
        <div className="flex w-11/12 items-center justify-between">
          <TbChevronDown
            onClick={close}
            className="duration h-6 w-6 cursor-pointer text-black hover:text-blue-600 md:hidden dark:text-white"
          />
          <div className="flex items-center gap-2 font-semibold">
            <IconLogo noTitle className="hidden h-12 w-12 md:flex" />
            <div className="text-center text-sm uppercase md:text-left md:text-base">
              <p className="text-black/70 dark:text-white/70">
                Playing from {currentlyPlayingTrack?.context?.type}
              </p>
              <p
                onClick={() => {
                  close();
                  navigate(
                    `/${currentlyPlayingTrack?.context?.type}/${currentlyPlayingTrack?.context?.id}`,
                  );
                }}
                className="cursor-pointer text-black hover:underline dark:text-white"
              >
                {currentlyPlayingTrack?.context?.name}
              </p>
            </div>
          </div>

          {isSmall && (
            <TrackContextMenu track={currentlyPlayingTrack} position="center" />
          )}
        </div>

        <div className="flex w-10/12 justify-center py-10">
          <PlayerTrack fullScreen />
        </div>
        <div className="flex w-11/12 flex-col gap-3">
          <SongSlider />
          <div className="flex w-full items-center justify-between gap-5">
            <div className="flex w-1/4 justify-start">
              <SaveTrackButton
                track={currentlyPlayingTrack}
                className="h-6 w-6"
              />
            </div>
            <Controls />
            <div className="flex w-1/4 items-center justify-end gap-2 md:gap-3">
              {!isSmall && (
                <>
                  <VolumeHandler />
                  <TbArrowsDiagonalMinimize2
                    onClick={close}
                    className="h-6 w-6 cursor-pointer text-black duration-100 hover:text-blue-600 dark:text-white"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenPlayingTrack;
