import { useMutation, useQueryClient } from "@tanstack/react-query";
import { savePlaylist } from "../../services/playlistsAPi";
import toast from "react-hot-toast";

function useSavePlaylist(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: savePlaylistMutate } = useMutation({
    mutationKey: ["save-playlist", id],
    mutationFn: () => savePlaylist(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["is-playlist-saved", id] });
      queryClient.invalidateQueries({ queryKey: ["saved-playlists"] });
      toast("Added to your library");
    },
  });
  return { isPending, savePlaylistMutate };
}

export default useSavePlaylist;
