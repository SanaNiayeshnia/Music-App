import { useQuery } from "@tanstack/react-query";
import { getRecentlyPlayed } from "../../services/playerApi";

function useRecentlyPlayed({ all = false }) {
  const { isLoading, data: recentlyPlayedItems } = useQuery({
    queryKey: [`recently-played`, { all }],
    queryFn: () => getRecentlyPlayed(all),
  });
  return { isLoading, recentlyPlayedItems };
}

export default useRecentlyPlayed;
