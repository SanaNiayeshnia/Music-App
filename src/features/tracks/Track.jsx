import { IoMdPlay } from "react-icons/io";
import { RiAddCircleLine, RiMoreFill } from "react-icons/ri";
import { useSelector } from "react-redux";

function Track({ noCover = false, noArtist = false }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <div className="group flex items-center justify-between rounded-sm px-3 py-2 hover:bg-blue-50 dark:hover:bg-glass-100">
      <div className="flex items-center gap-2">
        <p className="mr-2 w-3.5 text-center">
          <span className="text-gray-900 group-hover:hidden dark:text-white">
            1
          </span>
          <IoMdPlay className="hidden cursor-pointer text-sm text-gray-900 duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
        </p>

        {!noCover && (
          <img src="/test.png" alt="" className="h-10 w-10 rounded-sm" />
        )}
        <div className="">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Heather
          </p>
          {!noArtist && (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Conan Gray
            </p>
          )}
        </div>
      </div>
      <div
        className={`${!isPlayingTrackbarOpen && "min-w-60 lg:min-w-72"} flex items-center justify-between gap-2`}
      >
        <p
          className={`${isPlayingTrackbarOpen && "hidden"} text-sm text-gray-900 xl:inline-block dark:text-white`}
        >
          1,356,247,890
        </p>
        <div className="flex items-center gap-3">
          <div className="w-5 text-center">
            <RiAddCircleLine className="text-gary-900 hidden cursor-pointer text-xl duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
          </div>
          <p className="text-sm text-gray-900 dark:text-white">3:18</p>
          <div className="w-5 text-center">
            <RiMoreFill className="text-gary-900 hidden cursor-pointer text-xl duration-100 hover:text-blue-600 group-hover:inline-block dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
