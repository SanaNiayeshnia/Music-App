import Skeleton from "../../ui/Skeleton";
import { formatName } from "../../utilities/helper";
import useCurrentlyPlayingTrack from "../player/useCurrentlyPlayingTrack";

function PlayerTrack() {
  const { isLoading, currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  return (
    <div className="flex items-center gap-4">
      {isLoading ? (
        <Skeleton className="h-14 w-14 rounded shadow" />
      ) : (
        <img
          className="h-14 w-14 rounded shadow"
          src={currentlyPlayingTrack?.album?.images[0]?.url || "/test.png"}
          alt={currentlyPlayingTrack?.name}
        />
      )}

      <div className="flex flex-col justify-end gap-0.5 leading-4">
        {isLoading ? (
          <>
            <Skeleton className="w- h-2 w-16 rounded-sm" />
            <Skeleton className="w- h-2 w-10 rounded-sm" />
          </>
        ) : (
          <>
            <p className="w-40 text-sm font-medium text-black dark:text-white">
              {formatName(currentlyPlayingTrack?.name, 30)}
            </p>
            <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
              {currentlyPlayingTrack?.artists[0]?.name}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default PlayerTrack;
