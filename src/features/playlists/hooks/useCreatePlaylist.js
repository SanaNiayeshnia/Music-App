import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlaylist } from "../../../services/playlistsAPi";

function useCreatePlaylist() {
  const queryClient = useQueryClient();

  const {
    isPending,
    mutate: createPlaylistMutate,
    data: playlist,
  } = useMutation({
    mutationKey: ["create-playlist"],
    mutationFn: createPlaylist,
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries(["saved-playlists"]);
      }, 5000);
    },
  });
  return { isPending, createPlaylistMutate, playlist };
}

export default useCreatePlaylist;
