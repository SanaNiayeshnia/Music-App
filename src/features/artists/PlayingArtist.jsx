import Button from "../../ui/Button";
import useCurrentlyPlayingTrack from "../player/useCurrentlyPlayingTrack";
import { BsHeartFill, BsHeartHalf } from "react-icons/bs";
import { Tooltip } from "@mui/material";
import Skeleton from "../../ui/Skeleton";
import useArtist from "./useArtist";
import { useEffect, useState } from "react";

function PlayingArtist() {
  const { isLoading: isLoadingTrack, currentlyPlayingTrack } =
    useCurrentlyPlayingTrack();
  const artistId = currentlyPlayingTrack?.artists[0]?.id;
  const { isLoading: isLoadingArtist, artist } = useArtist(artistId);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    //if the currently playing song changed, set isImageLoaded to false and show the skeleton before loading the new image
    setIsImageLoaded(false);
  }, [currentlyPlayingTrack?.id]);

  return (
    <div className="rounded-md bg-white/50 shadow dark:bg-black/50">
      <div className="relative overflow-hidden">
        <img
          src={
            !isLoadingArtist || !isLoadingArtist ? artist?.images[1]?.url : ""
          }
          alt={artist?.name}
          className={`${!isImageLoaded && "hidden"} aspect-square w-full rounded-t-md brightness-90 filter`}
          onLoad={() => setIsImageLoaded(true)}
        />
        {isLoadingArtist || isLoadingArtist || !isImageLoaded ? (
          <Skeleton className="aspect-square h-full w-full rounded-b-none rounded-t-md" />
        ) : (
          <>
            <p className="absolute left-4 top-4 text-sm font-semibold text-white drop-shadow-md">
              About the artist
            </p>
            <Tooltip title="popularity" placement="left">
              <div className="absolute bottom-4 right-4 flex items-center justify-end gap-1">
                {Array.from({ length: artist?.popularity / 20 }).map(
                  (heart, index) => (
                    <BsHeartFill
                      key={index}
                      className="text-white drop-shadow"
                    />
                  ),
                )}
                {artist?.popularity % 20 >= 10 && (
                  <BsHeartHalf className="text-white" />
                )}
              </div>
            </Tooltip>
          </>
        )}
      </div>

      <div className="space-y-3 px-5 py-4">
        {isLoadingTrack || isLoadingArtist ? (
          <Skeleton className="h-4 w-24 rounded-sm" />
        ) : (
          <p className="font-semibold text-black dark:text-white">
            {artist?.name}
          </p>
        )}

        <div className="flex items-center justify-between text-sm">
          {isLoadingTrack || isLoadingArtist ? (
            <Skeleton className="h-4 w-36 rounded-sm" />
          ) : (
            <>
              <p className="text-gray-600 dark:text-gray-300">
                {artist?.followers?.total.toLocaleString()} followers
              </p>
              <Button>Follow</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlayingArtist;
