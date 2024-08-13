import useFollowedArtists from "./useFollowedArtists";

function useIsArtistBeingFollowed(id) {
  const { isLoading, followedArtists } = useFollowedArtists();
  const isArtistBeingFollowed = followedArtists?.some(
    (followedArtist) => followedArtist.id === id,
  );
  return { isArtistBeingFollowed: isLoading ? false : isArtistBeingFollowed };
}

export default useIsArtistBeingFollowed;
