import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveAlbum } from "../../services/albumsApi";

function useSaveAlbum(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: saveAlbumMutate } = useMutation({
    mutationKey: ["save-album", id],
    mutationFn: () => saveAlbum(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["is-album-saved", id] });
      queryClient.invalidateQueries({ queryKey: ["saved-albums"] });
    },
  });
  return { isPending, saveAlbumMutate };
}

export default useSaveAlbum;
