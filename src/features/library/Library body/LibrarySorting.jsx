import { useDispatch, useSelector } from "react-redux";
import Sorting from "../../../ui/Sorting";
import { setSortBy } from "../librarySlice";

function LibrarySorting() {
  const dispatch = useDispatch();
  const { currentFilter } = useSelector((store) => store.library);
  return (
    <Sorting
      options={[currentFilter === "" && "Type", "A-Z", "Z-A"].filter(Boolean)}
      handler={(value) => dispatch(setSortBy(value))}
    />
  );
}

export default LibrarySorting;
