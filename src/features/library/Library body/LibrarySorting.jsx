import { useDispatch } from "react-redux";
import Sorting from "../../../ui/Sorting";
import { setSortByIndex } from "../librarySlice";

function LibrarySorting() {
  const dispatch = useDispatch();
  return (
    <Sorting
      options={["Type", "A-Z", "Z-A"]}
      handler={(value) => dispatch(setSortByIndex(value))}
    />
  );
}

export default LibrarySorting;
