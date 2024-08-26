import { useEffect, useState } from "react";
import Skeleton from "../../ui/Skeleton";
import { formatName } from "../../utilities/helper";
import useCurrentlyPlayingTrack from "../player/hooks/useCurrentlyPlayingTrack";
import { useNavigate } from "react-router-dom";
import SaveTrackButton from "./SaveTrackButton";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Cover from "../../ui/Cover";
import { setIsFullScreenPlayingTrack } from "../player/PlaybackSlice";

function PlayerTrack({ fullScreen }) {
  const { isLoading, currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { isSmall } = useSelector((store) => store.global);
  const dispatch = useDispatch();

  useEffect(() => {
    //if the currently playing song changed, set isImageLoaded to false and show the skeleton before loading the new image
    setIsImageLoaded(false);
  }, [currentlyPlayingTrack?.id]);

  return (
    <div
      className={`${!currentlyPlayingTrack && "opacity-50"} ${!fullScreen && "gap-4 md:w-72"} flex items-center justify-between`}
    >
      <div
        className={`${fullScreen && isSmall && "flex-col"} ${fullScreen ? "gap-6" : "gap-4"} flex items-center`}
      >
        <div className="flex-shrink-0">
          {fullScreen ? (
            <Cover
              cover={
                !isLoading ? currentlyPlayingTrack?.album?.images[0]?.url : ""
              }
              title={currentlyPlayingTrack?.name}
              size="large"
            />
          ) : (
            <>
              {(isLoading || !isImageLoaded) && (
                <Skeleton
                  className={`aspect-square h-11 w-11 flex-shrink-0 rounded shadow md:h-14 md:w-14`}
                />
              )}
              <img
                key={currentlyPlayingTrack?.id}
                className={`${!isImageLoaded && "hidden"} aspect-square h-11 w-11 flex-shrink-0 rounded shadow md:h-14 md:w-14`}
                src={
                  !isLoading ? currentlyPlayingTrack?.album?.images[0]?.url : ""
                }
                alt={currentlyPlayingTrack?.name}
                onLoad={() => setIsImageLoaded(true)}
              />
            </>
          )}
        </div>

        <div
          className={`${!isLoading && !currentlyPlayingTrack && "w-16"} ${fullScreen ? "gap-2" : "gap-1"} flex flex-col justify-end leading-4`}
        >
          {isLoading ? (
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
                  navigate(`/track/${currentlyPlayingTrack?.id}`);
                }}
                className={`${fullScreen ? "text-xl font-bold leading-8 md:text-3xl md:leading-10" : "text-sm font-medium md:w-40"} cursor-pointer ${fullScreen ? "text-black dark:text-white" : "text-white md:text-black md:dark:text-white"} hover:underline`}
              >
                {formatName(currentlyPlayingTrack?.name, fullScreen ? 50 : 35)}
              </p>
              <p
                className={`${fullScreen ? "text-lg font-semibold md:text-2xl" : "text-[0.8rem]"} cursor-pointer ${fullScreen ? "text-black/70 dark:text-white/70" : "text-white/80 md:text-gray-600 md:dark:text-gray-300"} `}
              >
                {currentlyPlayingTrack?.artists?.map((artist, index) => (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(setIsFullScreenPlayingTrack(false));
                      navigate(`/artist/${artist?.id}`);
                    }}
                    className="hover:underline"
                    key={artist?.id}
                  >
                    {artist.name}
                    {currentlyPlayingTrack.artists.length > 1 &&
                      index < currentlyPlayingTrack.artists.length - 1 &&
                      ", "}
                  </span>
                ))}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        {currentlyPlayingTrack?.name && !fullScreen && (
          <>
            <SaveTrackButton
              className={`min-h-5 min-w-5 ${isSmall && "text-white hover:text-white"}`}
              track={currentlyPlayingTrack}
            />
            <TbPlayerPlayFilled className="min-h-5 min-w-5 text-white md:hidden" />
          </>
        )}
      </div>
    </div>
  );
}

export default PlayerTrack;
