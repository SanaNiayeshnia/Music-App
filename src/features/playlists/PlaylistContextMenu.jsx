import {
  TbCircleCheckFilled,
  TbCirclePlus,
  TbLink,
  TbMusicPlus,
  TbPlus,
} from "react-icons/tb";
import TinySpinner from "../../ui/TinySpinner";
import ContextMenu from "../../ui/ContextMenu";
import useIsPlaylistSaved from "./useIsPlaylistSaved";
import useSavePlaylist from "./useSavePlaylist";
import useUnsavePlaylist from "./useUnsavePlaylist";
import { copyLink } from "../../utilities/helper";

function PlaylistContextMenu({ position, playlist }) {
  const { isLoading: isLoadingPlaylistSaved, isPlaylistSaved } =
    useIsPlaylistSaved(playlist?.id);
  const { isPending: isPendingSave, savePlaylistMutate } = useSavePlaylist(
    playlist?.id,
  );
  const { isPending: isPendingUnsave, unsavePlaylistMutate } =
    useUnsavePlaylist(playlist?.id);

  function handler() {}
  const options = [
    {
      title: isPlaylistSaved
        ? "Remove from your library"
        : "Add to your library",
      icon: (
        <>
          {isPlaylistSaved ? (
            <TbCircleCheckFilled className="group-hover/contxetli:text-blue-600" />
          ) : (
            <TbCirclePlus className="group-hover/contxetli:text-blue-600" />
          )}
        </>
      ),
      handler: isPlaylistSaved ? unsavePlaylistMutate : savePlaylistMutate,
      close: true,
    },
    {
      title: "Add to the queue",
      icon: <TbMusicPlus className="group-hover/contxetli:text-blue-600" />,
      handler,
    },
    {
      title: "Add to playlist",
      icon: <TbPlus className="group-hover/contxetli:text-blue-600" />,
      handler,
    },
    {
      title: "Copy the link",
      icon: <TbLink className="group-hover/contxetli:text-blue-600" />,
      handler: () => copyLink(playlist),
      close: true,
    },
  ];
  return <ContextMenu position={position} options={options} />;
}

export default PlaylistContextMenu;
