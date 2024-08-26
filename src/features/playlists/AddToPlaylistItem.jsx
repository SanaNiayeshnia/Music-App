import { TbCircleCheckFilled } from "react-icons/tb";
import useAddItemsToPlaylist from "./hooks/useAddItemsToPlaylist";
import usePlaylist from "./hooks/usePlaylist";
import { Tooltip } from "@mui/material";
import useRemoveItemsFromPlaylist from "./hooks/useRemoveItemsFromPlaylist";

function AddToPlaylistItem({
  playlistId,
  setIsClickedOnPlaylistChildren,
  item,
}) {
  const { addItemsToPlaylistMutate } = useAddItemsToPlaylist(playlistId);
  const { removeItemsFromPlaylistMutate } =
    useRemoveItemsFromPlaylist(playlistId);
  const { playlist } = usePlaylist(playlistId);

  function addToExistedPlaylist() {
    const itemUrisForAdd =
      item?.type === "track"
        ? [item?.uri]
        : item?.type === "album"
          ? item?.tracks?.items?.map((item) => item.uri)
          : "";

    addItemsToPlaylistMutate(
      { playlistId, itemUris: itemUrisForAdd },
      {
        onSettled: () => {
          setIsClickedOnPlaylistChildren(true);
        },
      },
    );
  }
  function handleRemoveFromPlaylist(e) {
    e.stopPropagation();
    const itemUrisForRemove = [{ uri: item?.uri }];
    removeItemsFromPlaylistMutate(
      { playlistId, itemUris: itemUrisForRemove },
      {
        onSettled: () => {
          setIsClickedOnPlaylistChildren(true);
        },
      },
    );
  }
  return (
    <div
      onClick={addToExistedPlaylist}
      className="flex items-center justify-between gap-2 px-3 py-2 hover:bg-blue-50 dark:hover:bg-white/10"
    >
      <p className="text-left text-black dark:text-white">{playlist?.name}</p>
      {item?.type === "track" &&
        playlist?.tracks?.items?.some((i) => i.track.id === item?.id) && (
          <Tooltip title="Remove from this playlist">
            <div onClick={handleRemoveFromPlaylist}>
              <TbCircleCheckFilled className="text-black duration-100 hover:text-blue-600 dark:text-white" />
            </div>
          </Tooltip>
        )}
    </div>
  );
}

export default AddToPlaylistItem;
