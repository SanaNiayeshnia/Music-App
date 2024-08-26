import { useDispatch, useSelector } from "react-redux";
import { addRemoveFilter } from "../librarySlice";
import Filters from "../../../ui/Filters";
import useLibraryContext from "../hooks/useLibraryContext";

function LibraryFilters() {
  const dispatch = useDispatch();
  const { currentFilter } = useSelector((store) => store.library);
  const { scrollLibraryToTop } = useLibraryContext();

  return (
    <div className="min-w-[290px]">
      <Filters
        options={[
          { title: "Artists", value: "artist" },
          { title: "Albums", value: "album" },
          { title: "Playlists", value: "playlist" },
        ]}
        handler={(filter) => {
          dispatch(addRemoveFilter(filter));
          scrollLibraryToTop();
        }}
        currentFilter={currentFilter}
      />
    </div>
  );
}

export default LibraryFilters;
