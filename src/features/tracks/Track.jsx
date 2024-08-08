import { TbCirclePlus, TbDots, TbPlayerPlayFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { formatDate, formatTrackDuration } from "../../utilities/helper";
import { useState } from "react";
import Skeleton from "../../ui/Skeleton";

function Track({
  track,
  index,
  noCover = false,
  noArtist = false,
  noAlbum = false,
  extra = "",
  smallScreen = false,
  isLoading = false,
}) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const artists = track?.artists?.map((artist) => artist.name).join(", ");

  return (
    <tr
      className={`${smallScreen ? "cursor-pointer grid-cols-[2fr_0.5fr] px-2" : isPlayingTrackbarOpen ? "grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr] px-3 xl:grid-cols-[0.5fr_3fr_2.5fr_1.5fr_0.5fr_0.5fr_0.5fr]" : "grid-cols-[0.5fr_3fr_2.5fr_1.5fr_0.5fr_0.5fr_0.5fr] px-3 xl:grid-cols-[0.5fr_3fr_2.5fr_1.5fr_0.5fr_0.5fr_0.5fr]"} group grid items-center gap-1 rounded-md py-2 hover:bg-white/40 hover:shadow dark:hover:bg-black/40`}
    >
      {!smallScreen && (
        <td className="w-3.5 text-center">
          <span
            className={`${!isLoading && "group-hover:hidden"} text-black dark:text-white`}
          >
            {index ? index : track?.track_number}
          </span>
          {!isLoading && (
            <TbPlayerPlayFilled className="hidden cursor-pointer text-sm text-black duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
          )}
        </td>
      )}

      <td className="flex items-center gap-2">
        {!noCover && (
          <div className="relative flex-shrink-0">
            {(!isImageLoaded || isLoading) && (
              <Skeleton
                className={`${smallScreen ? "h-14 w-14 group-hover:brightness-75" : "h-10 w-10"} aspect-square rounded shadow`}
              />
            )}
            <img
              src={!isLoading ? track?.album?.images[0].url : ""}
              alt={track?.name}
              onLoad={() => setIsImageLoaded(true)}
              className={`${smallScreen ? "h-14 w-14 group-hover:brightness-75" : "h-10 w-10"} ${!isImageLoaded && "hidden"} aspect-square rounded shadow`}
            />
            {smallScreen && (
              <TbPlayerPlayFilled className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer text-base text-white duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
            )}
          </div>
        )}
        <div>
          {isLoading ? (
            <Skeleton className="h-3 w-20 rounded-sm" />
          ) : (
            <>
              <p className="text-sm font-medium text-black dark:text-white">
                {track?.name}
              </p>
              {!noArtist && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {artists}
                </p>
              )}
            </>
          )}
        </div>
      </td>
      {!isLoading && (
        <>
          {!smallScreen && (
            <>
              <td
                className={`${isPlayingTrackbarOpen && "hidden"} text-sm text-black xl:inline-block dark:text-white`}
              >
                {!noAlbum && track?.album?.name}
              </td>
              <td
                className={`${isPlayingTrackbarOpen && "hidden"} xl:inline-block`}
              >
                <p
                  className={`text-sm text-black xl:inline-block dark:text-white`}
                >
                  {extra === "date" && formatDate(track?.album?.release_date)}
                  {extra === "stream" && "1,356,247,890"}
                </p>
              </td>
              <td className="text-center">
                {!isLoading && (
                  <TbCirclePlus className="text-gary-900 hidden min-h-5 min-w-5 cursor-pointer duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
                )}
              </td>
              <td className="text-center">
                {!isLoading && (
                  <p className="text-sm text-black dark:text-white">
                    {formatTrackDuration(track?.duration_ms)}
                  </p>
                )}
              </td>
            </>
          )}
          <td className="text-center">
            <TbDots className="text-gary-900 hidden min-h-5 min-w-5 cursor-pointer duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
          </td>
        </>
      )}
    </tr>
  );
}

export default Track;
