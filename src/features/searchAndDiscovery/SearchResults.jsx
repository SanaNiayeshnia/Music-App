import { useSearchParams } from "react-router-dom";
import ResultList from "./ResultList";
import SongsResult from "./SongsResult";
import TopResult from "./TopResult";
import useSearchResult from "./useSearchResult";
import SearchResultFilters from "./SearchResultFilters";
import { TbMoodSad } from "react-icons/tb";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const { isLoading, searchResult, error } = useSearchResult(
    searchParams.get("q"),
  );
  return (
    <div>
      {error ? (
        <div className="flex min-h-40 items-center justify-center gap-1 font-semibold">
          <p className="text-black dark:text-white">{error?.message}</p>
          <TbMoodSad className="h-7 w-7 text-blue-600 duration-100" />
        </div>
      ) : (
        <>
          <SearchResultFilters />
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
        </>
      )}
    </div>
  );
}

export default SearchResults;
