import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlaylist } from "../../services/playlistsAPi";
import useCurrentUser from "../users/useCurrentUser";
import toast from "react-hot-toast";
import useAddItemsToPlaylist from "./useAddItemsToPlaylist";

function useCreatePlaylist(playlistName, uris) {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();
  const { addItemsToPlaylistMutate } = useAddItemsToPlaylist();

  const {
    isPending,
    mutate: createPlaylistMutate,
    data: playlist,
  } = useMutation({
    mutationKey: ["create-playlist", playlistName],
    mutationFn: () => createPlaylist({ userId: user.id, playlistName }),
    onSuccess: (data) => {
      if (uris) {
        addItemsToPlaylistMutate(
          { playlistId: data.id, itemUris: uris },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(["playlist", data.id]);
              queryClient.invalidateQueries(["saved-playlists"]);
              toast("Playlist created");
            },
          },
        );
      } else {
        queryClient.invalidateQueries(["saved-playlists"]);
        toast(`Playlist ${playlistName} created`);
      }
    },
  });
  return { isPending, createPlaylistMutate, playlist };
}

export default useCreatePlaylist;
