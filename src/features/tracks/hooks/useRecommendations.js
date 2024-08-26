import { useQuery } from "@tanstack/react-query";
import { getRecommendations } from "../../../services/tracksApi";

function useRecommendations(id) {
  const { isLoading, data: recommendations } = useQuery({
    queryKey: ["recommendation", id],
    queryFn: () => getRecommendations(id),
  });
  return { isLoading, recommendations };
}

export default useRecommendations;
