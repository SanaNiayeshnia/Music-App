import { useSearchParams } from "react-router-dom";
import Filters from "../../ui/Filters";
import ResultList from "./ResultList";
import SongsResult from "./SongsResult";
import TopResult from "./TopResult";
import useSearchResult from "./useSearchResult";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const { isLoading, searchResult } = useSearchResult(searchParams.get("q"));
  return (
    <div>
      {/* <Filters /> */}
      <div className="flex flex-wrap gap-3">
        <TopResult item={searchResult?.topResult} isLoading={isLoading} />
        <SongsResult
          items={searchResult?.tracks?.items}
          isLoading={isLoading}
        />
      </div>
      <ResultList
        isLoading={isLoading}
        title="Artists"
        items={searchResult?.artists?.items}
      />
      <ResultList
        isLoading={isLoading}
        title="Albums"
        items={searchResult?.albums?.items}
      />
      <ResultList
        isLoading={isLoading}
        title="Playlists"
        items={searchResult?.playlists?.items}
      />
    </div>
  );
}

export default SearchResults;
