import { RiAddFill, RiBookmark3Line } from "react-icons/ri";
import { useSelector } from "react-redux";

function LibraryHeader() {
  const { isSmallMedium } = useSelector((store) => store.global);
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);

  return (
    <div
      className={`${isPlayingTrackbarOpen && isSmallMedium ? "justify-center" : "justify-between"} flex items-center pl-4 pr-2`}
    >
      <div
        className={`${isPlayingTrackbarOpen && isSmallMedium && "justify-center"} flex items-center gap-2`}
      >
        <RiBookmark3Line className="min-h-6 min-w-6 text-gray-900 duration-100 dark:text-white" />
        <span
          className={`${isPlayingTrackbarOpen && isSmallMedium && "md:hidden"} text-gray-900 md:inline-block dark:text-white`}
        >
          library
        </span>
      </div>
      <RiAddFill
        className={`${isPlayingTrackbarOpen && isSmallMedium && "md:hidden"} min-h-8 min-w-8 cursor-pointer rounded-full p-1 text-gray-900 hover:bg-blue-50 md:inline-block dark:text-white dark:hover:bg-glass-100`}
      />
    </div>
  );
}

export default LibraryHeader;
