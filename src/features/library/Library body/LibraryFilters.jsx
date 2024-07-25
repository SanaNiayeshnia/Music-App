import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../librarySlice";
import Filters from "../../../ui/Filters";

function LibraryFilters() {
  const dispatch = useDispatch();

  return (
    <div className="min-w-[285px]">
      <Filters
        items={[
          { title: "Artists", value: "artist" },
          { title: "Albums", value: "album" },
          { title: "Playlists", value: "playlist" },
        ]}
        addHandler={(filter) => dispatch(addFilter(filter))}
        removeHandler={(filter) => dispatch(removeFilter(filter))}
      />
    </div>
  );
}

export default LibraryFilters;
