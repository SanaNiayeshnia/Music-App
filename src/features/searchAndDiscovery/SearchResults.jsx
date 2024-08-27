import { useSearchParams } from "react-router-dom";
import ResultList from "./ResultList";
import SongsResult from "./SongsResult";
import TopResult from "./TopResult";
import useSearchResult from "./hooks/useSearchResult";
import SearchResultFilters from "./SearchResultFilters";
import { TbMoodSad } from "react-icons/tb";
import { useState } from "react";
import Spinner from "../../ui/Spinner";
import PageHeaderWrapper from "../../ui/layout/page/PageHeaderWrapper";
import PageBody from "../../ui/layout/page/PageBody";
import PageTitle from "../../ui/layout/page/PageTitle";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const { isLoading, searchResult, error } = useSearchResult(
    searchParams.get("q"),
  );
  const [currentFilter, setCurrentFilter] = useState("");

  return (
    <>
      {isLoading ? (
        <div className="grid h-[calc(100%-52px)] place-items-center">
          <Spinner />
        </div>
      ) : !isLoading && error ? (
        <div className="flex min-h-40 items-center justify-center gap-1 font-semibold">
          <p className="text-black dark:text-white">{error?.message}</p>
          <TbMoodSad className="h-7 w-7 text-blue-600 duration-100" />
        </div>
      ) : (
        <PageBody noPadding>
          <SearchResultFilters
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            searchResult={searchResult}
          />
          {currentFilter === "" && (
            <TopResult item={searchResult?.topResult} isLoading={isLoading} />
          )}
          {(currentFilter === "" || currentFilter === "track") && (
            <SongsResult
              items={searchResult?.tracks?.items}
              all={currentFilter === "track"}
              setCurrentFilter={setCurrentFilter}
            />
          )}
          {(currentFilter === "" || currentFilter === "artist") && (
            <ResultList
              title="Artists"
              items={searchResult?.artists?.items}
              all={currentFilter === "artist"}
              setCurrentFilter={setCurrentFilter}
            />
          )}

          {(currentFilter === "" || currentFilter === "album") && (
            <ResultList
              title="Albums"
              items={searchResult?.albums?.items}
              all={currentFilter === "album"}
              setCurrentFilter={setCurrentFilter}
            />
          )}

          {(currentFilter === "" || currentFilter === "playlist") && (
            <ResultList
              title="Playlists"
              items={searchResult?.playlists?.items}
              all={currentFilter === "playlist"}
              setCurrentFilter={setCurrentFilter}
            />
          )}
        </PageBody>
      )}
    </>
  );
}

export default SearchResults;
