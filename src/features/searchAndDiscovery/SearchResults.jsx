import Filters from "../../ui/Filters";
import ResultList from "./ResultList";
import SongsResult from "./SongsResult";
import TopResult from "./TopResult";

function SearchResults() {
  return (
    <div>
      <Filters />
      <div className="flex flex-wrap gap-3">
        <TopResult />
        <SongsResult />
      </div>
      <ResultList type="artist" title="Artists" />
      <ResultList type="album" title="Albums" />
      <ResultList type="playlist" title="Playlists" />
    </div>
  );
}

export default SearchResults;
