import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveAlbum } from "../../../services/albumsApi";
import toast from "react-hot-toast";

function useSaveAlbum(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: saveAlbumMutate } = useMutation({
    mutationKey: ["save-album", id],
    mutationFn: () => saveAlbum(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["is-album-saved", id] });
      queryClient.invalidateQueries({ queryKey: ["saved-albums"] });
      toast("Added to your library");
    },
  });
  return { isPending, saveAlbumMutate };
}

export default useSaveAlbum;
