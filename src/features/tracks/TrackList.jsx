import Track from "./Track";
import { useSelector } from "react-redux";
import { TbClock } from "react-icons/tb";

function TrackList({
  items = {},
  noCover = false,
  noAlbum = false,
  noArtist = false,
  all = false,
  max = 4,
  isLoading = false,
  playlist = null,
}) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isSmall } = useSelector((store) => store.global);

  return (
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
        {isLoading
          ? Array.from({ length: max }).map((item, index) => (
              <Track index={index + 1} key={index} isLoading={isLoading} />
            ))
          : items
              ?.slice(0, all ? items?.length : max)
              .map((item, index) => (
                <Track
                  track={item}
                  index={index + 1}
                  key={index}
                  noCover={noCover}
                  noAlbum={noAlbum}
                  noArtist={noArtist}
                  playlist={playlist}
                  smallScreen={isSmall}
                />
              ))}
      </tbody>
    </table>
  );
}

export default TrackList;
