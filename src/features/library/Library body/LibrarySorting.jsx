import { useDispatch } from "react-redux";
import Sorting from "../../../ui/Sorting";
import { setSortBy } from "../librarySlice";
import useLibraryContext from "../hooks/useLibraryContext";

function LibrarySorting() {
  const dispatch = useDispatch();
  const { scrollLibraryToTop } = useLibraryContext();
  return (
    <Sorting
      options={["A-Z", "Z-A"]}
      handler={(value) => {
        dispatch(setSortBy(value));
        scrollLibraryToTop();
      }}
    />
  );
}

export default LibrarySorting;
