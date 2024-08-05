import Filters from "../../ui/Filters";

function SearchResultFilters() {
  return (
    <Filters
      options={[
        { title: "Artists", value: "artist" },
        { title: "Albums", value: "album" },
        { title: "Playlists", value: "playlist" },
      ]}
      filterField="type"
      handler={() => {}}
      currentFilterArray={[]}
    />
  );
}

export default SearchResultFilters;
