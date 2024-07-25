import { useQuery } from "@tanstack/react-query";
import { getFollowedArtists } from "../../services/artistsAPi";

function useFollowedArtists() {
  const {
    isLoading,
    data,
    total: count,
  } = useQuery({
    queryKey: ["followed-artists"],
    queryFn: getFollowedArtists,
  });

  const followedArtists = data?.artists?.items;

  return { isLoading, followedArtists, count };
}

export default useFollowedArtists;
