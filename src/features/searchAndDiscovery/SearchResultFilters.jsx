import Filters from "../../ui/Filters";

function SearchResultFilters() {
  return (
    <Filters
      options={[
        { title: "Artists", value: "artist" },
        { title: "Albums", value: "album" },
        { title: "Playlists", value: "playlist" },
        { title: "Songs", value: "track" },
      ]}
      filterField="type"
      handler={() => {}}
      currentFilterArray={[]}
    />
  );
}

export default SearchResultFilters;
