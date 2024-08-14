import useCurrentlyPlayingTrack from "../player/useCurrentlyPlayingTrack";
import Skeleton from "../../ui/Skeleton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SaveTrackButton from "./SaveTrackButton";

function PlayingTrack() {
  const { isLoading, currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //if the currently playing song changed, set isImageLoaded to false and show the skeleton before loading the new image
    setIsImageLoaded(false);
  }, [currentlyPlayingTrack?.id]);

  return (
    <div className="space-y-3">
      {(!isImageLoaded || isLoading) && (
        <Skeleton className="aspect-square h-full w-full rounded-md shadow" />
      )}

      <img
        key={currentlyPlayingTrack?.id}
        src={!isLoading ? currentlyPlayingTrack?.album?.images[0]?.url : ""}
        alt={currentlyPlayingTrack?.name}
        onLoad={() => setIsImageLoaded(true)}
        className={`${!isImageLoaded && "hidden"} w-full rounded-md shadow`}
      />

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 leading-4">
          {isLoading ? (
            <>
              <Skeleton className="h-4 w-32 rounded-sm" />
              <Skeleton className="h-4 w-24 rounded-sm" />
            </>
          ) : (
            <>
              <p
                onClick={() => navigate(`track/${currentlyPlayingTrack?.id}`)}
                className="cursor-pointer text-lg font-bold leading-6 text-black hover:underline dark:text-white"
              >
                {currentlyPlayingTrack?.name}
              </p>
              <p className="cursor-pointer text-gray-600 dark:text-gray-300">
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
        {!isLoading && (
          <SaveTrackButton
            className="min-h-5 min-w-5"
            track={currentlyPlayingTrack}
          />
        )}
      </div>
    </div>
  );
}

export default PlayingTrack;
