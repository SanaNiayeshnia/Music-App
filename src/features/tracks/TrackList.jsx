import { RiTimeLine } from "react-icons/ri";
import Track from "./Track";
import { useSelector } from "react-redux";
import { TbClock } from "react-icons/tb";

function TrackList({
  noCover = false,
  noAlbum = false,
  noArtist = false,
  extra,
}) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <table className="w-full pt-3">
      <thead className="border-b border-black/20 dark:border-white/20">
        <tr
          className={`${isPlayingTrackbarOpen ? "grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr]" : "grid-cols-[0.5fr_3fr_2fr_2fr_0.5fr_0.5fr_0.5fr]"} grid w-full px-3 py-2 text-sm font-medium xl:grid-cols-[0.5fr_3fr_2fr_2fr_0.5fr_0.5fr_0.5fr]`}
        >
          <td className="text-gray-600 dark:text-gray-300">#</td>
          <td className="text-gray-600 dark:text-gray-300">Title</td>
          <td
            className={`${isPlayingTrackbarOpen && "hidden"} text-gray-600 xl:inline-block dark:text-gray-300`}
          >
            {!noAlbum && "Album"}
          </td>
          <td
            className={`${isPlayingTrackbarOpen && "hidden"} text-gray-600 xl:inline-block dark:text-gray-300`}
          >
            {extra === "date" && "Date Added"}
          </td>
          <td></td>
          <td className="flex justify-center">
            <TbClock className="min-h-5 min-w-5 text-gray-600 duration-100 dark:text-gray-300" />
          </td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <Track
          noCover={noCover}
          noAlbum={noAlbum}
          noArtist={noArtist}
          extra={extra}
        />
        <Track
          noCover={noCover}
          noAlbum={noAlbum}
          noArtist={noArtist}
          extra={extra}
        />
        <Track
          noCover={noCover}
          noAlbum={noAlbum}
          noArtist={noArtist}
          extra={extra}
        />
        <Track
          noCover={noCover}
          noAlbum={noAlbum}
          noArtist={noArtist}
          extra={extra}
        />
      </tbody>
    </table>
  );
}

export default TrackList;
