import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPlaylistCover } from "../../../services/playlistsAPi";
import toast from "react-hot-toast";

function useAddPlaylistCover() {
  const queryClient = useQueryClient();
  const { isPending, mutate: addPlaylistCoverMutate } = useMutation({
    mutationKey: ["add-playlist-cover"],
    mutationFn: addPlaylistCover,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["saved-playlists"]);
      queryClient.invalidateQueries(["playlist", data?.playlistId]);

      toast("It may takes a while for the cover to be uploaded", {
        duration: 5000,
      });
    },
  });
  return { isPending, addPlaylistCoverMutate };
}

export default useAddPlaylistCover;
