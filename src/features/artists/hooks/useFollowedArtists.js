import { useQuery } from "@tanstack/react-query";
import { getFollowedArtists } from "../../../services/artistsAPi";

function useFollowedArtists() {
  const { isLoading, data } = useQuery({
    queryKey: ["followed-artists"],
    queryFn: getFollowedArtists,
  });
  const followedArtists = data?.artists;
  const count = data?.count;
  const next = data?.next;

  return { isLoading, followedArtists, count, next };
}

export default useFollowedArtists;
