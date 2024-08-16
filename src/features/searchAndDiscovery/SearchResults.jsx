import { useSearchParams } from "react-router-dom";
import ResultList from "./ResultList";
import SongsResult from "./SongsResult";
import TopResult from "./TopResult";
import useSearchResult from "./useSearchResult";
import SearchResultFilters from "./SearchResultFilters";
import { TbMoodSad } from "react-icons/tb";
import { useState } from "react";
import Spinner from "../../ui/Spinner";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const { isLoading, searchResult, error } = useSearchResult(
    searchParams.get("q"),
    searchParams.get("genre"),
  );
  const [currentFilterArray, setCurrentFilterArray] = useState([]);

  return (
    <div className="h-[calc(100%-52px)]">
      {isLoading ? (
        <div className="grid h-full place-items-center">
          <Spinner />
        </div>
      ) : !isLoading && error ? (
        <div className="flex min-h-40 items-center justify-center gap-1 font-semibold">
          <p className="text-black dark:text-white">{error?.message}</p>
          <TbMoodSad className="h-7 w-7 text-blue-600 duration-100" />
        </div>
      ) : (
        <>
          <SearchResultFilters
            currentFilterArray={currentFilterArray}
            setCurrentFilterArray={setCurrentFilterArray}
            searchResult={searchResult}
          />
          <div className="flex flex-wrap gap-3">
            {currentFilterArray.length === 0 && (
              <TopResult item={searchResult?.topResult} isLoading={isLoading} />
            )}
            {(currentFilterArray.length === 0 ||
              currentFilterArray.includes("track")) && (
              <SongsResult
                items={searchResult?.tracks?.items}
                all={currentFilterArray.includes("track")}
                setCurrentFilterArray={setCurrentFilterArray}
              />
            )}
          </div>
          {(currentFilterArray.length === 0 ||
            currentFilterArray.includes("artist")) && (
            <ResultList
              title="Artists"
              items={searchResult?.artists?.items}
              all={currentFilterArray.includes("artist")}
              setCurrentFilterArray={setCurrentFilterArray}
            />
          )}

          {(currentFilterArray.length === 0 ||
            currentFilterArray.includes("album")) && (
            <ResultList
              title="Albums"
              items={searchResult?.albums?.items}
              all={currentFilterArray.includes("album")}
              setCurrentFilterArray={setCurrentFilterArray}
            />
          )}

          {(currentFilterArray.length === 0 ||
            currentFilterArray.includes("playlist")) && (
            <ResultList
              title="Playlists"
              items={searchResult?.playlists?.items}
              all={currentFilterArray.includes("playlist")}
              setCurrentFilterArray={setCurrentFilterArray}
            />
          )}
        </>
      )}
    </div>
  );
}

export default SearchResults;
