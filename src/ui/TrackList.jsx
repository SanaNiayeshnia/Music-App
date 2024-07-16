import { RiTimeLine } from "react-icons/ri";
import Track from "../features/tracks/Track";

function TrackList({
  noCover = false,
  noAlbum = false,
  noArtist = false,
  extra,
}) {
  return (
    <table className="w-full pt-3">
      <thead className="border-b border-blue-100 dark:border-glass-200">
        <tr className="grid w-full grid-cols-[0.2fr_3fr_2fr_2fr_0.25fr_0.25fr_0.25fr] px-3 py-2 text-sm font-medium">
          <td className="text-gray-600 dark:text-gray-300">#</td>
          <td className="text-gray-600 dark:text-gray-300">Title</td>
          <td className="text-gray-600 dark:text-gray-300">
            {!noAlbum && "Album"}
          </td>
          <td className="text-gray-600 dark:text-gray-300">
            {extra === "date" && "Date Added"}
          </td>
          <td className="text-gray-600 dark:text-gray-300"></td>
          <td className="text-center">
            <RiTimeLine className="min-h-5 min-w-5 text-gray-600 duration-100 dark:text-gray-300" />
          </td>
          <td className="text-gray-600 dark:text-gray-300"></td>
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
