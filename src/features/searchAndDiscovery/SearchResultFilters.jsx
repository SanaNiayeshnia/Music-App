import Filters from "../../ui/Filters";

function SearchResultFilters({
  currentFilter,
  setCurrentFilter,
  searchResult,
}) {
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
      currentFilter={currentFilter}
    />
  );
}

export default SearchResultFilters;
