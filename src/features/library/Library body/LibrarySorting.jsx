import { useDispatch, useSelector } from "react-redux";
import Sorting from "../../../ui/Sorting";
import { setSortBy } from "../librarySlice";
import useLibraryContext from "../hooks/useLibraryContext";

function LibrarySorting() {
  const dispatch = useDispatch();
  const { currentFilter } = useSelector((store) => store.library);
  const { scrollLibraryToTop } = useLibraryContext();
  return (
    <Sorting
      options={[currentFilter === "" && "Type", "A-Z", "Z-A"].filter(Boolean)}
      handler={(value) => {
        dispatch(setSortBy(value));
        scrollLibraryToTop();
      }}
    />
  );
}

export default LibrarySorting;
