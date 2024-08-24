import { useEffect, useState } from "react";
import Skeleton from "../../ui/Skeleton";
import { formatName } from "../../utilities/helper";
import useCurrentlyPlayingTrack from "../player/useCurrentlyPlayingTrack";
import { useNavigate } from "react-router-dom";
import SaveTrackButton from "./SaveTrackButton";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useSelector } from "react-redux";

function PlayerTrack() {
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
      className={`${!currentlyPlayingTrack && "opacity-50"} flex items-center justify-between gap-4 md:w-60`}
    >
      <div className="flex items-center gap-4">
        {(isLoading || !isImageLoaded) && (
          <Skeleton className="aspect-square h-11 w-11 flex-shrink-0 rounded shadow md:h-14 md:w-14" />
        )}
        <img
          key={currentlyPlayingTrack?.id}
          className={`${!isImageLoaded && "hidden"} aspect-square h-11 w-11 flex-shrink-0 rounded shadow md:h-14 md:w-14`}
          src={!isLoading ? currentlyPlayingTrack?.album?.images[0]?.url : ""}
          alt={currentlyPlayingTrack?.name}
          onLoad={() => setIsImageLoaded(true)}
        />

        <div
          className={`${!isLoading && !currentlyPlayingTrack && "w-16"} flex flex-col justify-end gap-0.5 leading-4`}
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
                className="cursor-pointer text-sm font-medium text-white hover:underline md:w-40 md:text-black md:dark:text-white"
              >
                {formatName(currentlyPlayingTrack?.name, 35)}
              </p>
              <p className="cursor-pointer text-[0.8rem] text-gray-300 md:text-gray-600 md:dark:text-gray-300">
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
        {currentlyPlayingTrack?.name && (
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
