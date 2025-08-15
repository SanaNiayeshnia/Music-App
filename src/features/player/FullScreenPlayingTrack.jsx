import { useDispatch, useSelector } from "react-redux";
import PlayerTrack from "../tracks/PlayerTrack";
import Controls from "./playbackController/Controls";
import SongSlider from "./playbackController/SongSlider";
import VolumeHandler from "./playerMenu/VolumeHandler";
import SaveTrackButton from "../tracks/SaveTrackButton";
import {
  TbArrowsDiagonalMinimize2,
  TbChevronDown,
  TbPlaylist,
} from "react-icons/tb";
import { setIsFullScreenPlayingTrack, toggleQueueBar } from "./PlaybackSlice";
import IconLogo from "../../ui/layout/topNav/IconLogo";
import TrackContextMenu from "../tracks/TrackContextMenu";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { usePlayerContext } from "../../contexts/player/usePlayerContext";
import { Tooltip } from "@mui/material";
import QueueBar from "./queue/QueueBar";

function FullScreenPlayingTrack() {
  const { isFullScreenPlayingTrackOpen, isQueueBarOpen } = useSelector(
    (store) => store.playback,
  );
  const { isSmall } = useSelector((store) => store.global);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentTrack, playerState } = usePlayerContext();
  function close() {
    dispatch(setIsFullScreenPlayingTrack(false));
  }

  const containerRef = useRef();

  useEffect(() => {
    if (isFullScreenPlayingTrackOpen && !isSmall) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen(); // Safari
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen(); // IE11
      }
    }

    return () => document?.exitFullscreen();
  }, [isFullScreenPlayingTrackOpen, isSmall]);

  return (
    <div
      style={{
        backgroundImage: `url(${currentTrack?.album?.images[0]?.url ?? ""})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={`${isFullScreenPlayingTrackOpen ? "translate-y-0" : "translate-y-full"} fixed inset-0 z-50 transition-all duration-300`}
      ref={containerRef}
    >
      <div className="absolute inset-0 grid place-items-center bg-white/50 px-2 backdrop-blur-lg md:px-8 dark:bg-black/50">
        <div className="flex w-11/12 items-center justify-between">
          <TbChevronDown
            onClick={close}
            className="duration h-6 w-6 cursor-pointer text-black hover:text-blue-600 md:hidden dark:text-white"
          />
          <div className="flex items-center gap-2 font-semibold">
            <IconLogo noTitle className="hidden h-12 w-12 md:flex" />
            <div className="text-center text-sm uppercase md:text-left md:text-base">
              <p className="text-black/70 dark:text-white/70">
                Playing from{" "}
                {playerState?.context?.uri?.split(":")?.[1] || "track"}
              </p>
              <p
                onClick={() => {
                  close();
                  navigate(
                    `/${playerState?.context?.uri?.split(":")?.[1] || "track"}/${playerState?.context?.uri?.split(":")?.[2] || currentTrack?.id}`,
                  );
                }}
                className="cursor-pointer text-black hover:underline dark:text-white"
              >
                {playerState?.context?.metadata?.context_description ||
                  currentTrack?.name}
              </p>
            </div>
          </div>

          {isSmall && (
            <TrackContextMenu track={currentTrack} position="center" />
          )}
        </div>

        <div className="flex w-10/12 justify-center py-10">
          <PlayerTrack fullScreen />
        </div>
        <div className="flex w-11/12 flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <Tooltip title="Queue" placement="top">
              <div>
                <TbPlaylist
                  onClick={() =>
                    currentTrack?.id ? dispatch(toggleQueueBar()) : null
                  }
                  className={`${isQueueBarOpen ? "text-blue-600" : "text-black dark:text-white"} ${currentTrack?.id && "cursor-pointer"} min-h-5 min-w-5 duration-100`}
                />
              </div>
            </Tooltip>
            <SaveTrackButton track={currentTrack} className="h-6 w-6" />
          </div>
          <SongSlider />
          <div className="flex w-full flex-row-reverse items-center justify-center gap-5 md:flex-row md:justify-between">
            <div className="hidden w-1/4 justify-start md:flex">
              <SaveTrackButton track={currentTrack} className="h-6 w-6" />
            </div>
            <Controls />

            <div className="hidden w-1/4 items-center justify-end gap-2 md:flex md:gap-3">
              <VolumeHandler />
              <TbArrowsDiagonalMinimize2
                onClick={close}
                className="h-6 w-6 cursor-pointer text-black duration-100 hover:text-blue-600 dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <QueueBar />
      </div>
    </div>
  );
}

export default FullScreenPlayingTrack;
