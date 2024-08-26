import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeItemsFromPlaylist } from "../../../services/playlistsAPi";
import toast from "react-hot-toast";

function useRemoveItemsFromPlaylist(playlistId) {
  const queryClient = useQueryClient();
  const { isPending, mutate: removeItemsFromPlaylistMutate } = useMutation({
    mutationKey: ["remove-items-from-playlist"],
    mutationFn: removeItemsFromPlaylist,
    onSuccess: () => {
      queryClient.invalidateQueries(["playlist", playlistId]);
      toast("Removed from playlist");
    },
  });
  return { isPending, removeItemsFromPlaylistMutate };
}

export default useRemoveItemsFromPlaylist;
