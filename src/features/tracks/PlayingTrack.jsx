import Skeleton from "../../ui/Skeleton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SaveTrackButton from "./SaveTrackButton";
import { usePlayerContext } from "../player/hooks/usePlayerContext";

function PlayingTrack() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();
  const { currentTrack } = usePlayerContext();

  useEffect(() => {
    //if the currently playing song changed, set isImageLoaded to false and show the skeleton before loading the new image
    setIsImageLoaded(false);
  }, [currentTrack?.id]);

  return (
    <div className="space-y-3">
      {!isImageLoaded && (
        <Skeleton className="aspect-square h-full w-full rounded-md shadow" />
      )}

      <img
        key={currentTrack?.id}
        src={currentTrack?.album?.images[0]?.url ?? ""}
        alt={currentTrack?.name}
        onLoad={() => setIsImageLoaded(true)}
        className={`${!isImageLoaded && "hidden"} w-full rounded-md shadow`}
      />

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2 leading-4">
          {!currentTrack ? (
            <>
              <Skeleton className="h-4 w-32 rounded-sm" />
              <Skeleton className="h-4 w-24 rounded-sm" />
            </>
          ) : (
            <>
              <p
                onClick={() => navigate(`track/${currentTrack?.id}`)}
                className="cursor-pointer text-lg font-bold leading-6 text-black hover:underline dark:text-white"
              >
                {currentTrack?.name}
              </p>
              <p className="line-clamp-3 cursor-pointer text-gray-600 dark:text-gray-300">
                {currentTrack?.artists?.map((artist, index) => (
                  <span
                    onClick={() =>
                      navigate(`/artist/${artist?.uri?.split(":")?.[2]}`)
                    }
                    className="hover:underline"
                    key={index}
                  >
                    {artist?.name}
                    {currentTrack?.artists?.length > 1 &&
                      index < currentTrack?.artists?.length - 1 &&
                      ", "}
                  </span>
                ))}
              </p>
            </>
          )}
        </div>
        {currentTrack?.id && (
          <SaveTrackButton className="min-h-5 min-w-5" track={currentTrack} />
        )}
      </div>
    </div>
  );
}

export default PlayingTrack;
