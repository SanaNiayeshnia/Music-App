import useCurrentlyPlayingTrack from "../player/hooks/useCurrentlyPlayingTrack";
import Skeleton from "../../ui/Skeleton";
import useArtist from "./hooks/useArtist";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopularityHearts from "../../ui/PopularityHearts";
import FollowArtistButton from "./FollowArtistButton";

function PlayingArtist() {
  const { isLoading: isLoadingTrack, currentlyPlayingTrack } =
    useCurrentlyPlayingTrack();

  const artistId = currentlyPlayingTrack?.artists[0]?.id;
  const { isLoading: isLoadingArtist, artist } = useArtist(artistId);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //if the currently playing song changed, set isImageLoaded to false and show the skeleton before loading the new image
    setIsImageLoaded(false);
  }, [currentlyPlayingTrack?.id]);

  return (
    <div className="rounded-md bg-white/50 shadow dark:bg-black/50">
      <div className="relative overflow-hidden">
        <img
          key={currentlyPlayingTrack?.id}
          src={!isLoadingArtist ? artist?.images[1]?.url : ""}
          alt={artist?.name}
          className={`${!isImageLoaded && "hidden"} aspect-square w-full rounded-t-md brightness-90 filter`}
          onLoad={() => setIsImageLoaded(true)}
        />
        {isLoadingArtist || isLoadingTrack || !isImageLoaded ? (
          <Skeleton className="aspect-square h-full w-full rounded-b-none rounded-t-md" />
        ) : (
          <>
            <p className="absolute left-4 top-4 text-sm font-semibold text-white drop-shadow-md">
              About the artist
            </p>
            <PopularityHearts popularity={artist?.popularity} />
          </>
        )}
      </div>

      <div className="space-y-3 px-5 py-4">
        {isLoadingTrack || isLoadingArtist ? (
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
          {isLoadingTrack || isLoadingArtist ? (
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
