import useIsArtistBeingFollowed from "./hooks/useIsArtistBeingFollowed";
import Button from "../../ui/Button";
import useFollowArtist from "./hooks/useFollowArtist";
import useUnfollowArtist from "./hooks/useUnfollowArtist";
import TinySpinner from "../../ui/TinySpinner";

function FollowArtistButton({ artist }) {
  const { isArtistBeingFollowed } = useIsArtistBeingFollowed(artist?.id);
  const { isPending: isPendingFollow, followArtistMutate } = useFollowArtist(
    artist?.id,
  );
  const { isPending: isPendingUnfollow, unfollowArtistMutate } =
    useUnfollowArtist(artist?.id);
  return (
    <div>
      {isPendingFollow || isPendingUnfollow ? (
        <TinySpinner />
      ) : (
        <>
          {" "}
          {!isArtistBeingFollowed ? (
            <Button disabled={isPendingFollow} onClick={followArtistMutate}>
              Follow
            </Button>
          ) : (
            <Button
              disabled={isPendingUnfollow}
              active={true}
              onClick={unfollowArtistMutate}
            >
              Following
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export default FollowArtistButton;
