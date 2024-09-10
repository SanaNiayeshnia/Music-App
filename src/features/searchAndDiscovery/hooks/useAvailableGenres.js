import { useQuery } from "@tanstack/react-query";
import { getAvailableGenres } from "../../../services/searchApi";

function useAvailableGenres() {
  const { isLoading, data: availableGenres } = useQuery({
    queryKey: ["available-genres"],
    queryFn: getAvailableGenres,
  });
  return { isLoading, availableGenres };
}

export default useAvailableGenres;
