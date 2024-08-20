import { TbLink, TbUserMinus, TbUserPlus } from "react-icons/tb";
import { copyLink } from "../../utilities/helper";
import ContextMenu from "../../ui/ContextMenu";
import useIsArtistBeingFollowed from "./useIsArtistBeingFollowed";
import useFollowArtist from "./useFollowArtist";
import useUnfollowArtist from "./useUnfollowArtist";

function ArtistContextMenu({ artist, position }) {
  const { isArtistBeingFollowed } = useIsArtistBeingFollowed(artist?.id);
  const { followArtistMutate } = useFollowArtist(artist?.id);
  const { unfollowArtistMutate } = useUnfollowArtist(artist?.id);

  const options = [
    {
      title: isArtistBeingFollowed ? "Unfollow artist" : "Follow artist",
      icon: (
        <>
          {isArtistBeingFollowed ? (
            <TbUserMinus className="group-hover/contextli:text-blue-600" />
          ) : (
            <TbUserPlus className="group-hover/contextli:text-blue-600" />
          )}
        </>
      ),
      handler: isArtistBeingFollowed
        ? unfollowArtistMutate
        : followArtistMutate,
      closeAfterClick: true,
    },
    {
      title: "Copy the link",
      icon: <TbLink className="group-hover/contextli:text-blue-600" />,
      handler: () => copyLink(artist),
      closeAfterClick: true,
    },
  ];
  return <ContextMenu position={position} options={options} />;
}

export default ArtistContextMenu;
