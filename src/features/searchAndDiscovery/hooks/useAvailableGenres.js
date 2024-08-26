import { useQuery } from "@tanstack/react-query";
import { getAvailableGenres } from "../../../services/searchApi";
import { useSelector } from "react-redux";

function useAvailableGenres() {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: availableGenres } = useQuery({
    queryKey: ["available-genres"],
    queryFn: getAvailableGenres,
    enabled: Boolean(accessToken),
  });
  return { isLoading, availableGenres };
}

export default useAvailableGenres;
