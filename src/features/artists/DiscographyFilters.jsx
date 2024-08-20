import Filters from "../../ui/Filters";

function DiscographyFilters({ setCurrentFilter, currentFilter }) {
  function addRemoveFilter(newFilter) {
    if (currentFilter === newFilter) {
      //remove filter if it already chosen as the current filter
      setCurrentFilter("");
    } else {
      //add filter
      setCurrentFilter(newFilter);
    }
  }
  return (
    <Filters
      options={[
        { title: "Albums", value: "album" },
        { title: "Singles", value: "single" },
      ]}
      handler={addRemoveFilter}
      currentFilter={currentFilter}
    />
  );
}

export default DiscographyFilters;
