import { TbBookmark } from "react-icons/tb";
import { useSelector } from "react-redux";
import CreateNewPlaylistButton from "../playlists/CreateNewPlaylistButton";

function LibraryHeader() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);

  return (
    <div
      className={`${isPlayingTrackbarOpen ? "md:justify-center" : "md:justify-between"} flex items-center pl-4 pr-2 lg:justify-between`}
    >
      <div
        className={`${isPlayingTrackbarOpen && "md:justify-center"} flex items-center gap-2`}
      >
        <TbBookmark className="min-h-6 min-w-6 text-black duration-100 dark:text-white" />
        <span
          className={`${isPlayingTrackbarOpen && "md:hidden"} text-black lg:inline-block dark:text-white`}
        >
          library
        </span>
      </div>
      <CreateNewPlaylistButton />
    </div>
  );
}

export default LibraryHeader;
