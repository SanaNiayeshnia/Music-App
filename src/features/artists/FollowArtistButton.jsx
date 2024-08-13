import useIsArtistBeingFollowed from "./useIsArtistBeingFollowed";
import Button from "../../ui/Button";

function FollowArtistButton({ artist }) {
  const { isArtistBeingFollowed } = useIsArtistBeingFollowed(artist?.id);
  return (
    <div>
      {!isArtistBeingFollowed ? (
        <Button>Follow</Button>
      ) : (
        <Button>Following</Button>
      )}
    </div>
  );
}

export default FollowArtistButton;
