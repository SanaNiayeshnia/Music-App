import ContextMenu from "./ContextMenu";
import {
  TbCircleCheckFilled,
  TbCirclePlus,
  TbDots,
  TbDotsVertical,
  TbLink,
  TbMusicPlus,
  TbPlus,
  TbTrash,
} from "react-icons/tb";
import TinySpinner from "./TinySpinner";
import { copyLink } from "../utilities/helper";
import { useState } from "react";
import AddToPlaylist from "../features/playlists/AddToPlaylist";
import useOutsideClick from "../hooks/useOutsideClick";
import { useSelector } from "react-redux";

function ItemContextMenu({
  item,
  position,
  isLoadingItemSaved,
  isPendingSave,
  isPendingUnsave,
  saveItemMutate,
  unsaveItemMutate,
  isItemSaved,
  noAddToPlaylist = false,
  setIsUsingContextMenu,
  removeFromPlaylist,
}) {
  const [isOpenPlaylistOpt, setIsOpenPlaylistOpt] = useState(false);
  const addToPlaylistRef = useOutsideClick(() => {
    setIsOpenPlaylistOpt(false);
  });
  const [isClickedOnPlaylistChildren, setIsClickedOnPlaylistChildren] =
    useState(false);
  const { isSmall } = useSelector((store) => store.global);
  const className =
    "min-h-6 min-w-6 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white";

  function handler() {}
  const options = [
    removeFromPlaylist && {
      title: "Remove from this playlist",
      icon: <TbTrash />,
      handler: removeFromPlaylist,
      closeAfterClick: true,
    },
    {
      title: isItemSaved
        ? `Remove from ${item?.type === "track" ? "liked songs" : "library"} `
        : `Add to ${item?.type === "track" ? "liked songs" : "library"}`,
      icon:
        isLoadingItemSaved || isPendingSave || isPendingUnsave ? (
          <TinySpinner />
        ) : (
          <>
            {isItemSaved ? (
              <TbCircleCheckFilled className="group-hover/contextli:text-blue-600" />
            ) : (
              <TbCirclePlus className="group-hover/contextli:text-blue-600" />
            )}
          </>
        ),

      handler: isItemSaved ? unsaveItemMutate : saveItemMutate,
      closeAfterClick: true,
    },
    {
      title: "Add to queue",
      icon: <TbMusicPlus className="group-hover/contextli:text-blue-600" />,
      handler,
    },
    !noAddToPlaylist && {
      title: "Add to playlist",
      icon: <TbPlus className="group-hover/contextli:text-blue-600" />,
      child: isOpenPlaylistOpt ? (
        <AddToPlaylist
          item={item}
          ref={addToPlaylistRef}
          setIsClickedOnPlaylistChildren={setIsClickedOnPlaylistChildren}
        />
      ) : (
        ""
      ),
      handler: () =>
        setIsOpenPlaylistOpt((isOpenPlaylistOpt) => !isOpenPlaylistOpt),
    },
    {
      title: "Copy the link",
      icon: <TbLink className="group-hover/contextli:text-blue-600" />,
      handler: () => copyLink(item),
      closeAfterClick: true,
    },
  ].filter(Boolean);
  return (
    <ContextMenu
      position={position}
      options={options}
      close={isClickedOnPlaylistChildren}
      setIsUsingContextMenu={setIsUsingContextMenu}
    >
      {isSmall ? (
        <TbDotsVertical className={className} />
      ) : (
        <TbDots className={className} />
      )}
    </ContextMenu>
  );
}

export default ItemContextMenu;
