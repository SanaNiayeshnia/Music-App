import {
  TbDots,
  TbDotsVertical,
  TbLink,
  TbUserMinus,
  TbUserPlus,
} from "react-icons/tb";
import { copyLink } from "../../utilities/helper";
import ContextMenu from "../../ui/ContextMenu";
import useIsArtistBeingFollowed from "./useIsArtistBeingFollowed";
import useFollowArtist from "./useFollowArtist";
import useUnfollowArtist from "./useUnfollowArtist";
import { useSelector } from "react-redux";

function ArtistContextMenu({ artist, position }) {
  const { isArtistBeingFollowed } = useIsArtistBeingFollowed(artist?.id);
  const { followArtistMutate } = useFollowArtist(artist?.id);
  const { unfollowArtistMutate } = useUnfollowArtist(artist?.id);
  const { isSmall } = useSelector((store) => store.global);
  const className =
    "min-h-6 min-w-6 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white";

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
  return (
    <ContextMenu position={position} options={options}>
      {isSmall ? (
        <TbDotsVertical className={className} />
      ) : (
        <TbDots className={className} />
      )}
    </ContextMenu>
  );
}

export default ArtistContextMenu;
