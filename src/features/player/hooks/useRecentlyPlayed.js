import { useQuery } from "@tanstack/react-query";
import { getRecentlyPlayed } from "../../../services/playerApi";
import { useSelector } from "react-redux";

function useRecentlyPlayed({ all = false }) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: recentlyPlayedItems } = useQuery({
    queryKey: [`recently-played`, { all }],
    queryFn: () => getRecentlyPlayed(all),
    enabled: Boolean(accessToken),
  });
  return { isLoading, recentlyPlayedItems };
}

export default useRecentlyPlayed;
