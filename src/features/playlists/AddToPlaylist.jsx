import { forwardRef, useEffect, useState } from "react";
import SearchForPlaylists from "./SearchForPlaylists";
import { TbPlus } from "react-icons/tb";
import useCreatedByUserPlaylists from "./hooks/useCreatedByUserPlaylists";
import useCreatePlaylist from "./hooks/useCreatePlaylist";
import AddToPlaylistItem from "./AddToPlaylistItem";
import useAddItemsToPlaylist from "./hooks/useAddItemsToPlaylist";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "../authentication/hooks/useCurrentUser";
import toast from "react-hot-toast";

const AddToPlaylist = forwardRef(
  ({ item, setIsClickedOnPlaylistChildren }, ref) => {
    const { playlists } = useCreatedByUserPlaylists();
    const [searchQuery, setSearchQuery] = useState("");
    const filteredPlaylists = playlists.filter(
      (playlist) =>
        playlist.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) &&
        playlist?.id !== "LikedSongs",
    );
    const itemUris =
      item?.type === "track"
        ? [item?.uri]
        : item?.type === "album"
          ? item?.tracks?.items?.map((item) => item.uri)
          : "";

    const { createPlaylistMutate } = useCreatePlaylist();
    const { addItemsToPlaylistMutate } = useAddItemsToPlaylist();
    const { user } = useCurrentUser();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    useEffect(() => {
      //set isClickedOnPlayingChildren to default value (false) on mount
      setIsClickedOnPlaylistChildren(false);
    }, [setIsClickedOnPlaylistChildren]);

    function addToNewPlaylist() {
      createPlaylistMutate(
        { userId: user?.id, name: item?.name },
        {
          onSuccess: (data) => {
            toast(`Playlist ${item?.name} created`);
            addItemsToPlaylistMutate(
              { playlistId: data?.id, itemUris },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries({
                    queryKey: ["playlist", data?.id],
                  });
                  queryClient.invalidateQueries({
                    queryKey: ["saved-playlists"],
                  });
                },
              },
            );
          },
          onSettled: (data) => {
            navigate(`/playlist/${data?.id}`);
            setIsClickedOnPlaylistChildren(true);
          },
        },
      );
    }

    return (
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className={`absolute left-0 top-full z-40 w-56 overflow-hidden rounded bg-white text-sm shadow-md dark:bg-black dark:shadow-gray-50/10`}
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
          <TbPlus className="min-h-6 min-w-6 text-black duration-100 group-hover/new:text-blue-600 dark:text-white" />
          <span className="text-black dark:text-white"> New playlist</span>
        </p>
        {[
          ...(searchQuery === ""
            ? playlists.slice(0, 3).filter((p) => p.id !== "LikedSongs")
            : filteredPlaylists),
        ].map((playlist) => (
          <AddToPlaylistItem
            key={playlist?.id}
            playlistId={playlist?.id}
            setIsClickedOnPlaylistChildren={setIsClickedOnPlaylistChildren}
            item={item}
          />
        ))}
      </div>
    );
  },
);

AddToPlaylist.displayName = "AddToPlaylist";

export default AddToPlaylist;
