import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "../../../services/searchApi";

function useSearchResult(query) {
  const {
    isLoading,
    data: searchResult,
    error,
  } = useQuery({
    queryKey: ["search-result", query],
    queryFn: () => getSearchResult(query),
  });
  return { isLoading, searchResult, error };
}

export default useSearchResult;
