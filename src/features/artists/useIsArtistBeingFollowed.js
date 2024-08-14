import { useQuery } from "@tanstack/react-query";
import { checkUsersFollowedArtists } from "../../services/artistsAPi";

function useIsArtistBeingFollowed(id) {
  const { isLoading, data: isArtistBeingFollowed } = useQuery({
    queryKey: ["is-artist-being-followed", id],
    queryFn: () => checkUsersFollowedArtists(id),
  });
  return { isLoading, isArtistBeingFollowed };
}

export default useIsArtistBeingFollowed;
