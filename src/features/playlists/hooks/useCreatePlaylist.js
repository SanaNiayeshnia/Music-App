import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlaylist } from "../../../services/playlistsAPi";
import useCurrentUser from "../../authentication/hooks/useCurrentUser";
import toast from "react-hot-toast";
import useAddItemsToPlaylist from "./useAddItemsToPlaylist";

function useCreatePlaylist({ name, uris, isPublic = false }) {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();
  const { addItemsToPlaylistMutate } = useAddItemsToPlaylist();

  const {
    isPending,
    mutate: createPlaylistMutate,
    data: playlist,
  } = useMutation({
    mutationKey: ["create-playlist", name],
    mutationFn: () => createPlaylist({ userId: user?.id, name, isPublic }),
    onSuccess: (data) => {
      if (uris) {
        addItemsToPlaylistMutate(
          { playlistId: data?.id, itemUris: uris },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: ["playlist", data?.id],
              });
              queryClient.invalidateQueries({ queryKey: ["saved-playlists"] });
              toast("Playlist created");
            },
          },
        );
      } else {
        queryClient.invalidateQueries({ queryKey: ["saved-playlists"] });
        toast(`Playlist ${name} created`);
      }
    },
  });
  return { isPending, createPlaylistMutate, playlist };
}

export default useCreatePlaylist;
