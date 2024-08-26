import { TbDots, TbPlayerPlayFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { formatTrackDuration } from "../../utilities/helper";
import { useState } from "react";
import Skeleton from "../../ui/Skeleton";
import { useNavigate } from "react-router-dom";
import SaveTrackButton from "./SaveTrackButton";
import TrackContextMenu from "./TrackContextMenu";

function Track({
  track,
  index,
  noCover = false,
  noArtist = false,
  noAlbum = false,
  noIndex = false,
  isLoading = false,
  playlist,
}) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();
  const [isUsingContextMenu, setIsUsingContextMenu] = useState(false);
  const { isDarkMode, isSmall } = useSelector((store) => store.global);
  return (
    <tr
      className={`${isSmall ? "grid-cols-[0.5fr_4fr_0.5fr_0.5fr] pl-2" : isPlayingTrackbarOpen ? "grid-cols-[0.5fr_4fr_0.5fr_0.5fr_0.5fr] pl-3 xl:grid-cols-[0.5fr_4fr_3fr_0.5fr_0.5fr_0.5fr]" : "grid-cols-[0.5fr_4fr_3fr_0.5fr_0.5fr_0.5fr] pl-3 xl:grid-cols-[0.5fr_4fr_3fr_0.5fr_0.5fr_0.5fr]"} group grid items-center gap-1 rounded-md py-2 ${isUsingContextMenu ? "bg-white/40 shadow dark:bg-black/40" : "hover:bg-white/40 hover:shadow dark:hover:bg-black/40"}`}
    >
      {!noIndex && (
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
                className={`${isSmall ? "h-14 w-14 group-hover:brightness-75" : "h-10 w-10"} aspect-square rounded shadow`}
              />
            )}
            <img
              src={
                !isLoading
                  ? track?.album?.images?.at(0)?.url ||
                    (isDarkMode
                      ? "/images/covers/album-cover-dark.jpeg"
                      : "/images/covers/album-cover-light.jpeg")
                  : ""
              }
              alt={track?.name}
              onLoad={() => setIsImageLoaded(true)}
              className={`${isSmall ? "h-14 w-14 group-hover:brightness-75" : "h-10 w-10"} ${!isImageLoaded && "hidden"} aspect-square rounded shadow`}
            />
            {isSmall && (
              <TbPlayerPlayFilled className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer text-base text-white duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
            )}
          </div>
        )}
        <div>
          {isLoading ? (
            <div className="space-y-1">
              <Skeleton className="h-3 w-20 rounded-sm" />
              <Skeleton className="h-3 w-10 rounded-sm" />
            </div>
          ) : (
            <>
              <p
                onClick={() => navigate(`/track/${track?.id}`)}
                className="cursor-pointer text-sm font-medium text-black hover:underline dark:text-white"
              >
                {track?.name}
              </p>
              {!noArtist && (
                <p className="cursor-pointer text-sm text-gray-600 dark:text-gray-300">
                  {track?.artists?.map((artist, index) => (
                    <span
                      onClick={() => navigate(`/artist/${artist?.id}`)}
                      className="hover:underline"
                      key={artist?.id}
                    >
                      {artist.name}
                      {track.artists.length > 1 &&
                        index < track.artists.length - 1 &&
                        ", "}
                    </span>
                  ))}
                </p>
              )}
            </>
          )}
        </div>
      </td>
      {!isLoading && (
        <>
          {!isSmall && (
            <td
              onClick={() => navigate(`/album/${track?.album?.id}`)}
              className={`${isPlayingTrackbarOpen && "hidden"} cursor-pointer text-sm text-black hover:underline xl:inline-block dark:text-white`}
            >
              {!noAlbum && track?.album?.name}
            </td>
          )}

          <td className="text-center">
            {!isLoading && (
              <SaveTrackButton
                className={`${isUsingContextMenu || isSmall ? "inline-block" : "hidden group-hover:inline-block"} min-h-6 min-w-6 cursor-pointer duration-100 hover:text-blue-600 dark:text-white`}
                track={track}
              />
            )}
          </td>
          {!isSmall && (
            <td className="text-center">
              {!isLoading && (
                <p className="text-sm text-black dark:text-white">
                  {formatTrackDuration(track?.duration_ms)}
                </p>
              )}
            </td>
          )}

          <td className="text-center">
            <div
              className={
                isUsingContextMenu || isSmall
                  ? "inline-block"
                  : "hidden group-hover:inline-block"
              }
            >
              <TrackContextMenu
                setIsUsingContextMenu={setIsUsingContextMenu}
                track={track}
                position="left"
                playlist={playlist}
                smallScreen={isSmall}
              />
            </div>
          </td>
        </>
      )}
    </tr>
  );
}

export default Track;
