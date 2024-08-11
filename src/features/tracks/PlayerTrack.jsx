import { useEffect, useState } from "react";
import Skeleton from "../../ui/Skeleton";
import { formatName } from "../../utilities/helper";
import useCurrentlyPlayingTrack from "../player/useCurrentlyPlayingTrack";
import { useNavigate } from "react-router-dom";

function PlayerTrack() {
  const { isLoading, currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //if the currently playing song changed, set isImageLoaded to false and show the skeleton before loading the new image
    setIsImageLoaded(false);
  }, [currentlyPlayingTrack?.id]);

  return (
    <div
      className={`${!currentlyPlayingTrack && "opacity-50"} flex items-center gap-4`}
    >
      {(isLoading || !isImageLoaded) && (
        <Skeleton className="h-14 w-14 rounded shadow" />
      )}
      <img
        className={`${!isImageLoaded && "hidden"} h-14 w-14 rounded shadow`}
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
              className="w-40 cursor-pointer text-sm font-medium text-black hover:underline dark:text-white"
            >
              {formatName(currentlyPlayingTrack?.name, 35)}
            </p>
            <p className="cursor-pointer text-[0.8rem] text-gray-600 dark:text-gray-300">
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
  );
}

export default PlayerTrack;
