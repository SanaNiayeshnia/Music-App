import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlaylist } from "../../services/playlistsAPi";
import useCurrentUser from "../users/useCurrentUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCreatePlaylist(playlistName) {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isPending,
    mutate: createPlaylistMutate,
    data: playlist,
  } = useMutation({
    mutationKey: ["create-playlist", playlistName],
    mutationFn: () => createPlaylist({ userId: user.id, playlistName }),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["saved-playlists"]);
      navigate(`/playlist/${data.id}`);
      toast("Playlist created");
    },
  });
  return { isPending, createPlaylistMutate, playlist };
}

export default useCreatePlaylist;
