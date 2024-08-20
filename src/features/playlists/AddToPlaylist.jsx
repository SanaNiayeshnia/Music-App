import { forwardRef, useState } from "react";
import SearchForPlaylists from "./SearchForPlaylists";
import { TbPlus } from "react-icons/tb";
import useCreatedByUserPlaylists from "./useCreatedByUserPlaylists";
import useCreatePlaylist from "./useCreatePlaylist";
import TinySpinner from "../../ui/TinySpinner";
import useAddItemsToPlaylist from "./useAddItemsToPlaylist";

const AddToPlaylist = forwardRef(
  ({ item, setIsClickedOnPlaylistChildren }, ref) => {
    const { playlists } = useCreatedByUserPlaylists();
    const [searchQuery, setSearchQuery] = useState("");
    const filteredPlaylists = playlists.filter((playlist) =>
      playlist.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );
    const itemUris =
      item.type === "track"
        ? [item.uri]
        : item.type === "album"
          ? item.tracks.items.map((item) => item.uri)
          : "";

    const {
      isPending: isPendingCreatePlaylist,
      createPlaylistMutate,
      playlist,
    } = useCreatePlaylist(item?.name, itemUris);
    const { isPending: isPendingAddItemsToPlaylist, addItemsToPlaylistMutate } =
      useAddItemsToPlaylist(playlist?.id);

    function addToNewPlaylist() {
      createPlaylistMutate(null, {
        onSettled: () => {
          setIsClickedOnPlaylistChildren(true);
        },
      });
    }

    function addToExistedPlaylist(id) {
      addItemsToPlaylistMutate({ playlistId: id, itemUris });
      setIsClickedOnPlaylistChildren(true, {
        onSettled: () => {
          setIsClickedOnPlaylistChildren(true);
        },
      });
    }

    return (
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className={`absolute left-0 top-full z-50 w-56 overflow-hidden rounded bg-white text-sm shadow-md dark:bg-black dark:shadow-gray-50/10`}
      >
        <div className="px-3 py-2">
          <SearchForPlaylists
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <p
          onClick={addToNewPlaylist}
          className="group/new flex items-center gap-2 border-b border-gray-600 px-3 py-2 hover:bg-blue-50 dark:border-gray-300 dark:hover:bg-white/10"
        >
          {isPendingCreatePlaylist || isPendingAddItemsToPlaylist ? (
            <TinySpinner />
          ) : (
            <TbPlus className="min-h-6 min-w-6 text-black duration-100 group-hover/new:text-blue-600 dark:text-white" />
          )}
          <span className="text-black dark:text-white"> New playlist</span>
        </p>
        {[
          ...(searchQuery === "" ? playlists.slice(0, 3) : filteredPlaylists),
        ].map((playlist) => (
          <p
            onClick={() => addToExistedPlaylist(playlist.id)}
            key={playlist.id}
            className="flex items-center gap-2 px-3 py-2 text-black hover:bg-blue-50 dark:text-white dark:hover:bg-white/10"
          >
            {playlist?.name}
          </p>
        ))}
      </div>
    );
  },
);

AddToPlaylist.displayName = "AddToPlaylist";

export default AddToPlaylist;
