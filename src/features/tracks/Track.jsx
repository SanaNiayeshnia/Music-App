import { IoMdPlay } from "react-icons/io";
import { RiAddCircleLine, RiMoreFill } from "react-icons/ri";
import { useSelector } from "react-redux";

function Track({
  noCover = false,
  noArtist = false,
  noAlbum = false,
  extra = "",
  smallScreen = false,
}) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <tr
      className={`${smallScreen ? "grid-cols-[2fr_0.5fr]" : isPlayingTrackbarOpen ? "grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr] xl:grid-cols-[0.5fr_3fr_2fr_2fr_0.5fr_0.5fr_0.5fr]" : "grid-cols-[0.5fr_3fr_2fr_2fr_0.5fr_0.5fr_0.5fr] xl:grid-cols-[0.5fr_3fr_2fr_2fr_0.5fr_0.5fr_0.5fr]"} group grid items-center rounded-md px-2 py-2 hover:bg-blue-50 dark:hover:bg-glass-100`}
    >
      {!smallScreen && (
        <td className="w-3.5 text-center">
          <span className="text-gray-900 group-hover:hidden dark:text-white">
            1
          </span>
          <IoMdPlay className="hidden cursor-pointer text-sm text-gray-900 duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
        </td>
      )}

      <td className="flex items-center gap-2">
        {!noCover && (
          <div className="relative">
            <img
              src="/test.png"
              alt=""
              className={`${smallScreen ? "h-14 w-14 group-hover:brightness-75" : "h-10 w-10"} rounded`}
            />
            {smallScreen && (
              <IoMdPlay className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer text-base text-white duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
            )}
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Heather
          </p>
          {!noArtist && (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Conan Gray
            </p>
          )}
        </div>
      </td>
      {!smallScreen && (
        <>
          <td
            className={`${isPlayingTrackbarOpen && "hidden"} text-sm text-gray-900 xl:inline-block dark:text-white`}
          >
            {!noAlbum && "Superache"}
          </td>
          <td
            className={`${isPlayingTrackbarOpen && "hidden"} xl:inline-block`}
          >
            <p
              className={`text-sm text-gray-900 xl:inline-block dark:text-white`}
            >
              {extra === "date" && "June 2, 2023"}
              {extra === "stream" && "1,356,247,890"}
            </p>
          </td>
          <td className="text-center">
            <RiAddCircleLine className="text-gary-900 hidden cursor-pointer text-xl duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
          </td>
          <td className="text-center">
            <p className="text-sm text-gray-900 dark:text-white">3:18</p>
          </td>
        </>
      )}

      <td className="text-center">
        <RiMoreFill className="text-gary-900 hidden cursor-pointer text-xl duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
      </td>
    </tr>
  );
}

export default Track;
