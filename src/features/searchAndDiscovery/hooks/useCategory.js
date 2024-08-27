import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../../services/searchApi";

function useCategory(id) {
  const { isLoading, data: category } = useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategory(id),
  });
  return { isLoading, category };
}

export default useCategory;
