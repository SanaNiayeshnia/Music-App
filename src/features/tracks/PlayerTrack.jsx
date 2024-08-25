import { useEffect, useState } from "react";
import Skeleton from "../../ui/Skeleton";
import { formatName } from "../../utilities/helper";
import useCurrentlyPlayingTrack from "../player/useCurrentlyPlayingTrack";
import { useNavigate } from "react-router-dom";
import SaveTrackButton from "./SaveTrackButton";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useSelector } from "react-redux";

function PlayerTrack({ fullScreen }) {
  const { isLoading, currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { isSmall } = useSelector((store) => store.global);

  useEffect(() => {
    //if the currently playing song changed, set isImageLoaded to false and show the skeleton before loading the new image
    setIsImageLoaded(false);
  }, [currentlyPlayingTrack?.id]);

  return (
    <div
      className={`${!currentlyPlayingTrack && "opacity-50"} ${fullScreen ? "w-10/12" : "md:w-60"} flex items-center justify-between gap-4`}
    >
      <div
        className={`${fullScreen && isSmall && "flex-col"} flex items-center gap-4`}
      >
        {(isLoading || !isImageLoaded) && (
          <Skeleton
            className={`${fullScreen ? "h-80 w-80 md:h-96 md:w-96" : "h-11 w-11 md:h-14 md:w-14"} aspect-square flex-shrink-0 rounded shadow`}
          />
        )}
        <img
          key={currentlyPlayingTrack?.id}
          className={`${!isImageLoaded && "hidden"} ${fullScreen ? "h-80 w-80 md:h-96 md:w-96" : "h-11 w-11 md:h-14 md:w-14"} aspect-square flex-shrink-0 rounded shadow`}
          src={!isLoading ? currentlyPlayingTrack?.album?.images[0]?.url : ""}
          alt={currentlyPlayingTrack?.name}
          onLoad={() => setIsImageLoaded(true)}
        />

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
                onClick={() => navigate(`/track/${currentlyPlayingTrack?.id}`)}
                className={`${fullScreen ? "text-3xl font-bold" : "text-sm font-medium md:w-40"} cursor-pointer text-white hover:underline md:text-black md:dark:text-white`}
              >
                {formatName(currentlyPlayingTrack?.name, fullScreen ? 45 : 35)}
              </p>
              <p
                className={`${fullScreen ? "text-2xl font-semibold" : "text-[0.8rem]"} cursor-pointer text-gray-300 md:text-gray-600 md:dark:text-gray-300`}
              >
                {currentlyPlayingTrack?.artists?.map((artist, index) => (
                  <span
                    onClick={() => navigate(`/artist/${artist?.id}`)}
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
