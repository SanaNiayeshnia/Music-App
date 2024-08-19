import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemsToPlaylist } from "../../services/playlistsAPi";
import toast from "react-hot-toast";

function useAddItemsToPlaylist(playlistId) {
  const queryClient = useQueryClient();
  const { isPending, mutate: addItemsToPlaylistMutate } = useMutation({
    mutationKey: ["add-items-to-playlist"],
    mutationFn: addItemsToPlaylist,
    onSuccess: () => {
      queryClient.invalidateQueries(["playlist", playlistId]);
      toast(`Added items to the playlist`);
    },
  });
  return { isPending, addItemsToPlaylistMutate };
}

export default useAddItemsToPlaylist;
