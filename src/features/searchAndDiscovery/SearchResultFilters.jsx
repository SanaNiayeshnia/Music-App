import Filters from "../../ui/Filters";

function SearchResultFilters({ currentFilterArray, setCurrentFilterArray }) {
  function addRemoveFilter(newFilter) {
    if (currentFilterArray.includes(newFilter)) {
      //remove filter if it already exists in the current filter array
      setCurrentFilterArray((currentFilterArray) =>
        currentFilterArray.filter((filter) => filter !== newFilter),
      );
    } else {
      //add filter
      setCurrentFilterArray((currentFilterArray) => [
        ...currentFilterArray,
        newFilter,
      ]);
    }
  }

  return (
    <Filters
      options={[
        { title: "Artists", value: "artist" },
        { title: "Albums", value: "album" },
        { title: "Playlists", value: "playlist" },
        { title: "Songs", value: "track" },
      ]}
      filterField="type"
      handler={addRemoveFilter}
      currentFilterArray={currentFilterArray}
    />
  );
}

export default SearchResultFilters;
