import { useQuery } from "@tanstack/react-query";
import { getFollowedArtists } from "../../../services/artistsAPi";
import { useSelector } from "react-redux";

function useFollowedArtists() {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data } = useQuery({
    queryKey: ["followed-artists"],
    queryFn: getFollowedArtists,
    enabled: Boolean(accessToken),
  });
  const followedArtists = data?.artists;
  const count = data?.count;
  const next = data?.next;

  return { isLoading, followedArtists, count, next };
}

export default useFollowedArtists;
