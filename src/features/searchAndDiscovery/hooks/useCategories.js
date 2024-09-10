import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../services/searchApi";

function useCategories() {
  const { isLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { isLoading, categories };
}

export default useCategories;
