import LibraryList from "./LibraryList";
import LibrarySearchBox from "./LibrarySearchBox";
import LibrarySorting from "./LibrarySorting";
import { useSelector } from "react-redux";
import LibraryFilters from "./LibraryFilters";
import LibraryContextProvider from "../LibraryContextProvider";
import CreateNewPlaylistButton from "../../playlists/CreateNewPlaylistButton";

function LibraryBody() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isSmall } = useSelector((store) => store.global);

  return (
    <LibraryContextProvider>
      <div
        className={`${
          isPlayingTrackbarOpen ? "md:hidden" : "md:inline-block"
        } space-y-3 md:px-4 lg:inline-block`}
      >
        <div className="flex items-center justify-between">
          <LibraryFilters />
          {isSmall && <CreateNewPlaylistButton />}
        </div>
        <div className="flex items-center justify-between gap-2 text-black dark:text-white">
          <LibrarySearchBox />
          <LibrarySorting />
        </div>
      </div>
      <LibraryList />
    </LibraryContextProvider>
  );
}

export default LibraryBody;
