import { useDispatch, useSelector } from "react-redux";
import Sorting from "../../../ui/Sorting";
import { setSortByIndex } from "../librarySlice";

function LibrarySorting() {
  const dispatch = useDispatch();
  const { currentFilter } = useSelector((store) => store.library);
  return (
    <Sorting
      options={[currentFilter === "" && "Type", "A-Z", "Z-A"].filter(Boolean)}
      handler={(value) => dispatch(setSortByIndex(value))}
    />
  );
}

export default LibrarySorting;
