import {
  TbCircleCheckFilled,
  TbCirclePlus,
  TbLink,
  TbMusicPlus,
  TbPlus,
} from "react-icons/tb";
import TinySpinner from "../../ui/TinySpinner";
import ContextMenu from "../../ui/ContextMenu";
import { copyLink } from "../../utilities/helper";
import useSaveAlbum from "./useSaveAlbum";
import useUnsaveAlbum from "./useUnsaveAlbum";
import useIsAlbumSaved from "./useIsAlbumSaved";

function AlbumContextMenu({ album, position }) {
  const { isLoading: isLoadingAlbumSaved, isAlbumSaved } = useIsAlbumSaved(
    album?.id,
  );
  const { isPending: isPendingSave, saveAlbumMutate } = useSaveAlbum(album?.id);
  const { isPending: isPendingUnsave, unsaveAlbumMutate } = useUnsaveAlbum(
    album?.id,
  );

  function handler() {}
  const options = [
    {
      title: isAlbumSaved ? "Remove from your library" : "Add to your library",
      icon: (
        <>
          {isAlbumSaved ? (
            <TbCircleCheckFilled className="group-hover/contextli:text-blue-600" />
          ) : (
            <TbCirclePlus className="group-hover/contextli:text-blue-600" />
          )}
        </>
      ),
      handler: isAlbumSaved ? unsaveAlbumMutate : saveAlbumMutate,
      close: true,
    },
    {
      title: "Add to the queue",
      icon: <TbMusicPlus className="group-hover/contextli:text-blue-600" />,
      handler,
    },
    {
      title: "Add to playlist",
      icon: <TbPlus className="group-hover/contextli:text-blue-600" />,
      handler,
    },
    {
      title: "Copy the link",
      icon: <TbLink className="group-hover/contextli:text-blue-600" />,
      handler: () => copyLink(album),
      close: true,
    },
  ];
  return <ContextMenu position={position} options={options} />;
}

export default AlbumContextMenu;
