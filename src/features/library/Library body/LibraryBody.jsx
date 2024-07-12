import LibraryList from "./LibraryList";
import LibraryFilters from "./LibraryFilters";
import LibrarySearchBox from "./LibrarySearchBox";
import LibrarySorting from "./LibrarySorting";
import { useSelector } from "react-redux";

function LibraryBody() {
  const { isSmallMedium } = useSelector((store) => store.global);
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <>
      <div
        className={
          isPlayingTrackbarOpen && isSmallMedium ? "hidden" : "inline-block"
        }
      >
        <LibraryFilters />
        <div className="flex items-center justify-between px-2 text-gray-900 dark:text-white">
          <LibrarySearchBox />
          <LibrarySorting />
        </div>
      </div>

      <LibraryList />
    </>
  );
}

export default LibraryBody;
