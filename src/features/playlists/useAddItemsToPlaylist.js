import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemsToPlaylist } from "../../services/playlistsAPi";

function useAddItemsToPlaylist(playlistId) {
  const queryClient = useQueryClient();
  const { isPending, mutate: addItemsToPlaylistMutate } = useMutation({
    mutationKey: ["add-items-to-playlist"],
    mutationFn: addItemsToPlaylist,
    onSuccess: () => {
      queryClient.invalidateQueries(["playlist", playlistId]);
    },
  });
  return { isPending, addItemsToPlaylistMutate };
}

export default useAddItemsToPlaylist;
