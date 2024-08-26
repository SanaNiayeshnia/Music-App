import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "../../../services/searchApi";
import { useSelector } from "react-redux";

function useSearchResult(query, genre) {
  const { accessToken } = useSelector((store) => store.authentication);

  const {
    isLoading,
    data: searchResult,
    error,
  } = useQuery({
    queryKey: ["search-result", query, genre],
    queryFn: () => getSearchResult({ query, genre }),
    enabled: Boolean(accessToken),
  });
  return { isLoading, searchResult, error };
}

export default useSearchResult;
