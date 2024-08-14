import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unsavePlaylist } from "../../services/playlistsAPi";

function useUnsavePlaylist(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: unsavePlaylistMutate } = useMutation({
    mutationKey: ["unsave-playlist", id],
    mutationFn: () => unsavePlaylist(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["is-playlist-saved", id] });
      queryClient.invalidateQueries({ queryKey: ["saved-playlists"] });
    },
  });
  return { isPending, unsavePlaylistMutate };
}

export default useUnsavePlaylist;
