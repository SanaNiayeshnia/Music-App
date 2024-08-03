import { useQuery } from "@tanstack/react-query";
import { getRecentlyPlayed } from "../../services/playerApi";

function useRecentlyPlayed() {
  const { isLoading, data: recentlyPlayedItems } = useQuery({
    queryKey: ["recently-played"],
    queryFn: getRecentlyPlayed,
  });
  return { isLoading, recentlyPlayedItems };
}

export default useRecentlyPlayed;
