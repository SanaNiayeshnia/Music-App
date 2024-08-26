import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "../../../services/searchApi";

function useSearchResult(query, genre) {
  const {
    isLoading,
    data: searchResult,
    error,
  } = useQuery({
    queryKey: ["search-result", query, genre],
    queryFn: () => getSearchResult({ query, genre }),
  });
  return { isLoading, searchResult, error };
}

export default useSearchResult;
