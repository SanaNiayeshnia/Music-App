import { useQuery } from "@tanstack/react-query";
import { getFollowedArtists } from "../../services/artistsAPi";

function useFollowedArtists() {
  const { isLoading, data: followedArtists } = useQuery({
    queryKey: ["followed-artists"],
    queryFn: getFollowedArtists,
  });
  const count = followedArtists?.length;

  return { isLoading, followedArtists, count };
}

export default useFollowedArtists;
