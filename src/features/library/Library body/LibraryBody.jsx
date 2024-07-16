import LibraryList from "./LibraryList";
import LibrarySearchBox from "./LibrarySearchBox";
import LibrarySorting from "./LibrarySorting";
import { useSelector } from "react-redux";
import Filters from "../../../ui/Filters";

function LibraryBody() {
  const { isSmallMedium } = useSelector((store) => store.global);
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <>
      <div
        className={`${
          isPlayingTrackbarOpen && isSmallMedium ? "hidden" : "inline-block"
        } space-y-4 px-2`}
      >
        <Filters />
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
