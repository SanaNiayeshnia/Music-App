import { TbBookmark, TbPlus } from "react-icons/tb";
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
        <TbBookmark className="min-h-6 min-w-6 text-black duration-100 dark:text-white" />
        <span
          className={`${isPlayingTrackbarOpen && isSmallMedium && "md:hidden"} text-black md:inline-block dark:text-white`}
        >
          library
        </span>
      </div>
      <TbPlus
        className={`${isPlayingTrackbarOpen && isSmallMedium && "md:hidden"} min-h-7 min-w-7 cursor-pointer rounded-full p-1 text-black hover:bg-white/40 hover:shadow md:inline-block dark:text-white dark:hover:bg-black/40`}
      />
    </div>
  );
}

export default LibraryHeader;
