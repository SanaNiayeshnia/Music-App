import { useSearchParams } from "react-router-dom";
import ResultList from "./ResultList";
import SongsResult from "./SongsResult";
import TopResult from "./TopResult";
import useSearchResult from "./useSearchResult";
import SearchResultFilters from "./SearchResultFilters";
import { TbMoodSad } from "react-icons/tb";
import { useState } from "react";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const { isLoading, searchResult, error } = useSearchResult(
    searchParams.get("q"),
  );
  const [currentFilterArray, setCurrentFilterArray] = useState([]);

  return (
    <div>
      {error ? (
        <div className="flex min-h-40 items-center justify-center gap-1 font-semibold">
          <p className="text-black dark:text-white">{error?.message}</p>
          <TbMoodSad className="h-7 w-7 text-blue-600 duration-100" />
        </div>
      ) : (
        <>
          <SearchResultFilters
            currentFilterArray={currentFilterArray}
            setCurrentFilterArray={setCurrentFilterArray}
          />
          <div className="flex flex-wrap gap-3">
            {(currentFilterArray.length === 0 ||
              currentFilterArray.includes("track")) && (
              <>
                <TopResult
                  item={searchResult?.topResult}
                  isLoading={isLoading}
                />
                <SongsResult
                  items={searchResult?.tracks?.items}
                  isLoading={isLoading}
                  all={currentFilterArray.includes("track")}
                  setCurrentFilterArray={setCurrentFilterArray}
                />
              </>
            )}
          </div>
          {(currentFilterArray.length === 0 ||
            currentFilterArray.includes("artist")) && (
            <ResultList
              isLoading={isLoading}
              title="Artists"
              items={searchResult?.artists?.items}
              all={currentFilterArray.includes("artist")}
              setCurrentFilterArray={setCurrentFilterArray}
            />
          )}

          {(currentFilterArray.length === 0 ||
            currentFilterArray.includes("album")) && (
            <ResultList
              isLoading={isLoading}
              title="Albums"
              items={searchResult?.albums?.items}
              all={currentFilterArray.includes("album")}
              setCurrentFilterArray={setCurrentFilterArray}
            />
          )}

          {(currentFilterArray.length === 0 ||
            currentFilterArray.includes("playlist")) && (
            <ResultList
              isLoading={isLoading}
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
