import { forwardRef, useState } from "react";
import SearchForPlaylists from "./SearchForPlaylists";
import { TbPlus } from "react-icons/tb";
import useCreatedByUserPlaylists from "./useCreatedByUserPlaylists";
import useCreatePlaylist from "./useCreatePlaylist";
import TinySpinner from "../../ui/TinySpinner";
import useAddItemsToPlaylist from "./useAddItemsToPlaylist";

const AddToPlaylist = forwardRef(({ item, position }, ref) => {
  const { playlists } = useCreatedByUserPlaylists();
  const [searchQuery, setSearchQuery] = useState("");
  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
  );
  const {
    isPending: isPendingCreatePlaylist,
    createPlaylistMutate,
    playlist,
  } = useCreatePlaylist(item?.name);
  const { isPending: isPendingAddItemsToPlaylist, addItemsToPlaylistMutate } =
    useAddItemsToPlaylist(playlist?.id);

  function addToNewPlaylist() {
    createPlaylistMutate(null, {
      onSuccess: (data) => {
        const itemUris =
          item.type === "track"
            ? [item.uri]
            : item.type === "album"
              ? item.tracks.items.map((item) => item.uri)
              : "";
        const playlistId = data?.id;
        addItemsToPlaylistMutate({
          playlistId,
          itemUris,
        });
      },
    });
  }

  return (
    <div
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      className={`absolute ${position === "right" ? "left-[90%]" : "right-[90%]"} top-[0] min-w-52 overflow-hidden rounded bg-white text-sm shadow dark:bg-black`}
    >
      <div className="px-3 py-2">
        <SearchForPlaylists
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <p
        onClick={addToNewPlaylist}
        className="flex items-center gap-2 border-b border-gray-600 px-3 py-2 text-black hover:bg-blue-50 dark:border-gray-300 dark:text-white dark:hover:bg-white/10"
      >
        {isPendingCreatePlaylist || isPendingAddItemsToPlaylist ? (
          <TinySpinner />
        ) : (
          <TbPlus className="min-h-6 min-w-6 text-black dark:text-white" />
        )}
        New playlist
      </p>
      {[
        ...(searchQuery === "" ? playlists.slice(0, 3) : filteredPlaylists),
      ].map((playlist) => (
        <p
          key={playlist.id}
          className="flex items-center gap-2 px-3 py-2 text-black hover:bg-blue-50 dark:text-white dark:hover:bg-white/10"
        >
          {playlist?.name}
        </p>
      ))}
    </div>
  );
});

AddToPlaylist.displayName = "AddToPlaylist";

export default AddToPlaylist;
