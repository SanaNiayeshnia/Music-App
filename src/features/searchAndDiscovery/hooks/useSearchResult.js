import { useQuery } from "@tanstack/react-query";
import { getSearchResult } from "../../../services/searchApi";
import { useSelector } from "react-redux";

function useSearchResult(query) {
  const { accessToken } = useSelector((store) => store.authentication);

  const {
    isLoading,
    data: searchResult,
    error,
  } = useQuery({
    queryKey: ["search-result", query],
    queryFn: () => getSearchResult(query),
    enabled: Boolean(accessToken),
  });
  return { isLoading, searchResult, error };
}

export default useSearchResult;
