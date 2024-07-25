import LibraryList from "./LibraryList";
import LibrarySearchBox from "./LibrarySearchBox";
import LibrarySorting from "./LibrarySorting";
import { useSelector } from "react-redux";
import Filters from "../../../ui/Filters";

function LibraryBody() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  return (
    <>
      <div
        className={`${
          isPlayingTrackbarOpen ? "md:hidden" : "md:inline-block"
        } space-y-3 px-4 lg:inline-block`}
      >
        <Filters items={["Artists", "Albums", "Playlists"]} />
        <div className="flex items-center justify-between gap-2 text-black dark:text-white">
          <LibrarySearchBox />
          <LibrarySorting />
        </div>
      </div>
      <LibraryList />
    </>
  );
}

export default LibraryBody;
