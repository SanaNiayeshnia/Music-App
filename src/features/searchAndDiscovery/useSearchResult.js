import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "../../services/searchApi";

function useSearchResult(query) {
  const { isLoading, data: searchResult } = useQuery({
    queryKey: ["search-result", { query }],
    queryFn: () => getSearchResult(query),
  });
  return { isLoading, searchResult };
}

export default useSearchResult;
