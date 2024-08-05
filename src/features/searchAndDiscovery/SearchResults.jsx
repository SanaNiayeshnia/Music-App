import { useSearchParams } from "react-router-dom";
import ResultList from "./ResultList";
import SongsResult from "./SongsResult";
import TopResult from "./TopResult";
import useSearchResult from "./useSearchResult";
import SearchResultFilters from "./SearchResultFilters";
import { TbMoodSad } from "react-icons/tb";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const { isLoading, searchResult } = useSearchResult(searchParams.get("q"));
  return (
    <div>
      {!searchResult?.topResult ? (
        //if there was no top result, which mean there was no result at all, show the message
        <div className="flex min-h-40 items-center justify-center gap-1 font-semibold">
          <p className="text-black dark:text-white">
            Couldn&apos;t find anything relatable!
          </p>
          <TbMoodSad className="h-7 w-7 text-blue-600 duration-100" />
        </div>
      ) : (
        <>
          {" "}
          <SearchResultFilters />
          <div className="flex flex-wrap gap-3">
            <TopResult item={searchResult?.topResult} isLoading={isLoading} />
            {searchResult?.tracks?.items?.length > 0 && (
              <SongsResult
                items={searchResult?.tracks?.items}
                isLoading={isLoading}
              />
            )}
          </div>
          {searchResult?.artists?.items?.length > 0 && (
            <ResultList
              isLoading={isLoading}
              title="Artists"
              items={searchResult?.artists?.items}
            />
          )}
          {searchResult?.albums?.items?.length > 0 && (
            <ResultList
              isLoading={isLoading}
              title="Albums"
              items={searchResult?.albums?.items}
            />
          )}
          {searchResult?.playlists?.items?.length > 0 && (
            <ResultList
              isLoading={isLoading}
              title="Playlists"
              items={searchResult?.playlists?.items}
            />
          )}
        </>
      )}
    </div>
  );
}

export default SearchResults;
