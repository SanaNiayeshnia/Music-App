import useIsArtistBeingFollowed from "./useIsArtistBeingFollowed";
import Button from "../../ui/Button";
import useFollowArtist from "./useFollowArtist";
import useUnfollowArtist from "./useUnfollowArtist";

function FollowArtistButton({ artist }) {
  const { isArtistBeingFollowed } = useIsArtistBeingFollowed(artist?.id);
  const { isPending: isPendingFollow, followArtistMutate } = useFollowArtist(
    artist?.id,
  );
  const { isPending: isPendingUnfollow, unfollowArtistMutate } =
    useUnfollowArtist(artist?.id);
  return (
    <div>
      {!isArtistBeingFollowed ? (
        <Button disabled={isPendingFollow} onClick={followArtistMutate}>
          {isPendingFollow ? "following..." : "Follow"}
        </Button>
      ) : (
        <Button
          disabled={isPendingUnfollow}
          active={true}
          onClick={unfollowArtistMutate}
        >
          {isPendingUnfollow ? "unfollowing..." : "Following"}
        </Button>
      )}
    </div>
  );
}

export default FollowArtistButton;
