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
      queryClient.invalidateQueries(["saved-playlists"]);
    },
  });
  return { isPending, createPlaylistMutate, playlist };
}

export default useCreatePlaylist;
