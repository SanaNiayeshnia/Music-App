import { useQuery } from "@tanstack/react-query";
import { getRecommendations } from "../../../services/tracksApi";
import { useSelector } from "react-redux";

function useRecommendations(id) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: recommendations } = useQuery({
    queryKey: ["recommendation", id],
    queryFn: () => getRecommendations(id),
    enabled: Boolean(accessToken),
  });
  return { isLoading, recommendations };
}

export default useRecommendations;
