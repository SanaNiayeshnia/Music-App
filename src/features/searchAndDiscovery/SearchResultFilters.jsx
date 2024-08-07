import Filters from "../../ui/Filters";

function SearchResultFilters({
  currentFilterArray,
  setCurrentFilterArray,
  searchResult,
}) {
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
      options={
        [
          searchResult?.artists?.items?.length > 0 && {
            title: "Artists",
            value: "artist",
          },
          searchResult?.albums?.items?.length > 0 && {
            title: "Albums",
            value: "album",
          },
          searchResult?.playlists?.items?.length > 0 && {
            title: "Playlists",
            value: "playlist",
          },
          searchResult?.tracks?.items?.length > 0 && {
            title: "Songs",
            value: "track",
          },
        ].filter(Boolean) //removes any falsey values(such as null)
      }
      filterField="type"
      handler={addRemoveFilter}
      currentFilterArray={currentFilterArray}
    />
  );
}

export default SearchResultFilters;
