import { TbCirclePlus } from "react-icons/tb";
import useCurrentlyPlayingTrack from "../player/useCurrentlyPlayingTrack";
import Skeleton from "../../ui/Skeleton";

function PlayingTrack() {
  const { isLoading, currentlyPlayingTrack } = useCurrentlyPlayingTrack();
  const { artists, name, album } = currentlyPlayingTrack;
  return (
    <div className="space-y-3">
      {isLoading ? (
        <Skeleton className="aspect-square h-full w-full rounded-md shadow" />
      ) : (
        <img
          src={album?.images[0]?.url || "/test.png"}
          alt={name}
          className="w-full rounded-md shadow"
        />
      )}

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 leading-4">
          {isLoading ? (
            <>
              <Skeleton className="h-4 w-32 rounded-sm" />
              <Skeleton className="h-4 w-24 rounded-sm" />
            </>
          ) : (
            <>
              <p className="text-lg font-bold text-black dark:text-white">
                {name}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {artists[0]?.name}
              </p>
            </>
          )}
        </div>
        {!isLoading && (
          <TbCirclePlus className="min-h-5 min-w-5 cursor-pointer text-black duration-100 hover:text-blue-600 dark:text-white" />
        )}
      </div>
    </div>
  );
}

export default PlayingTrack;
