import { useQuery } from "@tanstack/react-query";
import { checkUsersFollowedArtists } from "../../../services/artistsAPi";
import { useSelector } from "react-redux";

function useIsArtistBeingFollowed(id) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: isArtistBeingFollowed } = useQuery({
    queryKey: ["is-artist-being-followed", id],
    queryFn: () => checkUsersFollowedArtists(id),
    enabled: Boolean(accessToken),
  });
  return { isLoading, isArtistBeingFollowed };
}

export default useIsArtistBeingFollowed;
