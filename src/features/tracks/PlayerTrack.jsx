import { useEffect, useState } from "react";
import Skeleton from "../../ui/Skeleton";
import { useNavigate } from "react-router-dom";
import SaveTrackButton from "./SaveTrackButton";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import Cover from "../../ui/Cover";
import { setIsFullScreenPlayingTrack } from "../player/PlaybackSlice";
import { usePlayerContext } from "../../contexts/player/usePlayerContext";

function PlayerTrack({ fullScreen = false }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentTrack } = usePlayerContext();

  useEffect(() => {
    //if the currently playing song changed, set isImageLoaded to false and show the skeleton before loading the new image
    setIsImageLoaded(false);
  }, [currentTrack?.id]);

  return (
    <div
      className={`${!currentTrack && "opacity-50"} ${!fullScreen && "gap-4 md:w-72"} flex items-center justify-between`}
    >
      <div
        className={`${fullScreen ? "flex-col md:flex-row" : ""} ${fullScreen ? "gap-6" : "gap-4"} flex items-center`}
      >
        <div className="flex-shrink-0">
          {fullScreen ? (
            <Cover
              cover={currentTrack?.album?.images[0]?.url ?? ""}
              title={currentTrack?.name}
              size="large"
              spinDisc
            />
          ) : (
            <>
              {(!currentTrack ||
                (!isImageLoaded && currentTrack?.album?.images[0]?.url)) && (
                <Skeleton
                  className={`aspect-square h-11 w-11 flex-shrink-0 rounded shadow md:h-14 md:w-14`}
                />
              )}
              <img
                key={currentTrack?.id}
                className={`${!isImageLoaded && "hidden"} aspect-square h-11 w-11 flex-shrink-0 rounded shadow md:h-14 md:w-14`}
                src={currentTrack?.album?.images[0]?.url ?? ""}
                alt={currentTrack?.name}
                onLoad={() => setIsImageLoaded(true)}
              />
            </>
          )}
        </div>

        <div
          className={`${!currentTrack && "w-16"} ${fullScreen ? "gap-2" : "gap-1"} flex flex-col justify-end leading-4`}
        >
          {!currentTrack ? (
            <>
              <Skeleton className="w- h-2 w-16 rounded-sm" />
              <Skeleton className="w- h-2 w-10 rounded-sm" />
            </>
          ) : (
            <>
              <p
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setIsFullScreenPlayingTrack(false));
                  navigate(`/track/${currentTrack?.id}`);
                }}
                className={`${fullScreen ? "line-clamp-2 max-w-96 text-xl font-bold leading-8 md:text-3xl md:leading-10" : "line-clamp-1 text-sm font-medium md:w-40"} cursor-pointer ${fullScreen ? "text-black dark:text-white" : "text-white md:text-black md:dark:text-white"} hover:underline`}
              >
                {currentTrack?.name}
              </p>
              <p
                className={`${fullScreen ? "text-lg font-semibold md:text-2xl" : "text-[0.8rem]"} cursor-pointer ${fullScreen ? "text-black/70 dark:text-white/70" : "text-white/80 md:text-gray-600 md:dark:text-gray-300"} `}
              >
                {currentTrack?.artists?.map((artist, index) => (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(setIsFullScreenPlayingTrack(false));
                      navigate(`/artist/${artist?.id}`);
                    }}
                    className="hover:underline"
                    key={index}
                  >
                    {artist.name}
                    {currentTrack.artists.length > 1 &&
                      index < currentTrack.artists.length - 1 &&
                      ", "}
                  </span>
                ))}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        {currentTrack?.name && !fullScreen && (
          <>
            <SaveTrackButton
              className={`min-h-5 min-w-5 text-white hover:text-white md:text-black md:hover:text-blue-600`}
              track={currentTrack}
            />
            <TbPlayerPlayFilled className="min-h-5 min-w-5 text-white md:hidden" />
          </>
        )}
      </div>
    </div>
  );
}

export default PlayerTrack;
