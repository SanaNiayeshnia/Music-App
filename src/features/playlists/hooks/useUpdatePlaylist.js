import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPlaylist } from "../../../services/playlistsAPi";
import toast from "react-hot-toast";

function useUpdatePlaylist(playlistId) {
  const queryClient = useQueryClient();
  const { isPending, mutate: updatePlaylistMutate } = useMutation({
    mutationKey: ["update-playlist"],
    mutationFn: editPlaylist,
    onSuccess: () => {
      toast("It may takes a few moments for the playlist to be updated", {
        duration: 5000,
      });
      setTimeout(() => {
        queryClient.invalidateQueries(["saved-playlists"]);
        queryClient.invalidateQueries(["playlist", playlistId]);
      }, 5000);
    },
  });
  return { isPending, updatePlaylistMutate };
}

export default useUpdatePlaylist;
