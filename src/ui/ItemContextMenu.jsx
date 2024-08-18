import ContextMenu from "./ContextMenu";
import {
  TbCircleCheckFilled,
  TbCirclePlus,
  TbLink,
  TbMusicPlus,
  TbPlus,
} from "react-icons/tb";
import TinySpinner from "./TinySpinner";
import { copyLink } from "../utilities/helper";
import { useState } from "react";
import AddToPlaylist from "../features/playlists/AddToPlaylist";
import useOutsideClick from "../hooks/useOutsideClick";

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
}) {
  const [isOpenPlaylistOpt, setIsOpenPlaylistOpt] = useState(false);
  const addToPlaylistRef = useOutsideClick(() => setIsOpenPlaylistOpt(false));

  function handler() {}
  const options = [
    {
      title: isItemSaved ? "Remove from your library" : "Add to your library",
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
      close: true,
    },
    {
      title: "Add to the queue",
      icon: <TbMusicPlus className="group-hover/contextli:text-blue-600" />,
      handler,
    },
    !noAddToPlaylist && {
      title: "Add to playlist",
      icon: <TbPlus className="group-hover/contextli:text-blue-600" />,
      child: isOpenPlaylistOpt ? (
        <AddToPlaylist item={item} position={position} ref={addToPlaylistRef} />
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
      close: true,
    },
  ].filter(Boolean);
  return <ContextMenu position={position} options={options} />;
}

export default ItemContextMenu;
