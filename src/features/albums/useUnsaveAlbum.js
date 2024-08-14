import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unsaveAlbum } from "../../services/albumsApi";

function useUnsaveAlbum(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: unsaveAlbumMutate } = useMutation({
    mutationKey: ["unsave-album", id],
    mutationFn: () => unsaveAlbum(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["is-album-saved", id] });
      queryClient.invalidateQueries({ queryKey: ["saved-albums"] });
    },
  });
  return { isPending, unsaveAlbumMutate };
}

export default useUnsaveAlbum;
