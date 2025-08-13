import Skeleton from "../../ui/Skeleton";
import useArtist from "./hooks/useArtist";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopularityHearts from "../../ui/PopularityHearts";
import FollowArtistButton from "./FollowArtistButton";
import { usePlayerContext } from "../../contexts/player/usePlayerContext";

function PlayingArtist() {
  const { currentTrack } = usePlayerContext();

  const artistId = currentTrack?.artists?.[0]?.uri?.split(":")?.[2];
  const { isLoading: isLoadingArtist, artist } = useArtist(artistId);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //if the currently playing song changed, set isImageLoaded to false and show the skeleton before loading the new image
    setIsImageLoaded(false);
  }, [currentTrack?.id]);

  return (
    <div className="overflow-hidden rounded-md shadow">
      <div className="relative">
        <div className="relative -z-10">
          <img
            key={currentTrack?.id}
            src={!isLoadingArtist ? artist?.images[1]?.url : ""}
            alt={artist?.name}
            className={`${!isImageLoaded && "hidden"} aspect-square w-full rounded-t-md brightness-90 filter`}
            onLoad={() => setIsImageLoaded(true)}
          />
          {(isLoadingArtist || !currentTrack || !isImageLoaded) && (
            <Skeleton className="aspect-square h-full w-full rounded-b-none rounded-t-md" />
          )}
        </div>
        <p className="absolute left-4 top-4 -z-10 text-sm font-semibold text-white drop-shadow-md">
          About the artist
        </p>
        <PopularityHearts popularity={artist?.popularity} />
      </div>

      <div className="space-y-3 bg-white/50 px-5 py-4 dark:bg-black/50">
        {!currentTrack || isLoadingArtist ? (
          <Skeleton className="h-4 w-24 rounded-sm" />
        ) : (
          <p
            className="cursor-pointer font-semibold text-black hover:underline dark:text-white"
            onClick={() => navigate(`/artist/${artist?.id}`)}
          >
            {artist?.name}
          </p>
        )}

        <div className="flex items-center justify-between text-sm">
          {!currentTrack || isLoadingArtist ? (
            <Skeleton className="h-4 w-36 rounded-sm" />
          ) : (
            <>
              <p className="text-gray-600 dark:text-gray-300">
                {artist?.followers?.total.toLocaleString()} followers
              </p>

              <FollowArtistButton artist={artist} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlayingArtist;
