import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../services/searchApi";
import { useSelector } from "react-redux";

function useCategories() {
  const { isAuthenticated } = useSelector((store) => store.authentication);
  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    enabled: Boolean(isAuthenticated),
  });

  return { isLoading, categories };
}

export default useCategories;
