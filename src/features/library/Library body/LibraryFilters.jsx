import { useDispatch, useSelector } from "react-redux";
import { addRemoveFilter } from "../librarySlice";
import Filters from "../../../ui/Filters";

function LibraryFilters() {
  const dispatch = useDispatch();
  const { currentFilterArray } = useSelector((store) => store.library);

  return (
    <div className="min-w-[285px]">
      <Filters
        options={[
          { title: "Artists", value: "artist" },
          { title: "Albums", value: "album" },
          { title: "Playlists", value: "playlist" },
        ]}
        handler={(filter) => dispatch(addRemoveFilter(filter))}
        currentFilterArray={currentFilterArray}
      />
    </div>
  );
}

export default LibraryFilters;
