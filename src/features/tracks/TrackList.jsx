import Track from "./Track";
import { useSelector } from "react-redux";
import { TbClock } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo } from "react";

function TrackList({
  items = [],
  noCover = false,
  noAlbum = false,
  noArtist = false,
  all = false,
  max = 4,
  isLoading = false,
  playlist = null,
  fetchNextPage = null,
  hasNextPage = false,
  isFetching,
}) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isSmall } = useSelector((store) => store.global);
  const itemsToShow = useMemo(
    () => items?.slice(0, all ? items?.length : max),
    [all, max, items],
  );
  const { ref: endRef, inView } = useInView();

  useEffect(() => {
    //when the user scrolls to the end, fetch next page items
    if (inView && hasNextPage && !isLoading && !isFetching) fetchNextPage();
  }, [inView, fetchNextPage, isLoading, isFetching, hasNextPage]);

  return (
    (isLoading || items?.length > 0) && (
      <table className="w-full pt-3">
        {all && !isSmall && (
          <thead className="border-b border-black/20 dark:border-white/20">
            <tr
              className={`${isPlayingTrackbarOpen ? "grid-cols-[0.5fr_4fr_0.5fr_0.5fr_0.5fr]" : "grid-cols-[0.5fr_4fr_3fr_0.5fr_0.5fr_0.5fr]"} grid w-full py-2 pl-3 text-sm font-medium xl:grid-cols-[0.5fr_4fr_3fr_0.5fr_0.5fr_0.5fr]`}
            >
              <td className="text-gray-600 dark:text-gray-300">#</td>
              <td className="text-gray-600 dark:text-gray-300">Title</td>
              <td
                className={`${isPlayingTrackbarOpen && "hidden"} text-gray-600 xl:inline-block dark:text-gray-300`}
              >
                {!noAlbum && "Album"}
              </td>

              <td></td>
              <td className="flex justify-center">
                <TbClock className="min-h-5 min-w-5 text-gray-600 duration-100 dark:text-gray-300" />
              </td>
              <td></td>
            </tr>
          </thead>
        )}
        <tbody>
          {!isLoading &&
            itemsToShow?.map((item, index) => (
              <Track
                track={item}
                index={index + 1}
                key={index}
                noCover={noCover}
                noAlbum={noAlbum}
                noArtist={noArtist}
                playlist={playlist}
              />
            ))}
        </tbody>
        <tfoot>
          <tr ref={endRef}></tr>
          {(hasNextPage || isLoading) &&
            Array.from({ length: max }).map((item, index) => (
              <Track key={index} isLoading={true} />
            ))}
        </tfoot>
      </table>
    )
  );
}

export default TrackList;
