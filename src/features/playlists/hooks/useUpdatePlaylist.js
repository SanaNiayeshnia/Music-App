import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPlaylist } from "../../../services/playlistsAPi";
import { duration } from "@mui/material";
import toast from "react-hot-toast";

function useUpdatePlaylist(playlistId) {
  const queryClient = useQueryClient();
  const { isPending, mutate: updatePlaylistMutate } = useMutation({
    mutationKey: ["update-playlist"],
    mutationFn: editPlaylist,
    onSuccess: () => {
      toast("It may takes a while for the playlist to be updated", {
        duration: 5000,
      });
      queryClient.invalidateQueries({ queryKey: ["saved-playlists"] });
      queryClient.invalidateQueries({ queryKey: ["playlist", playlistId] });
    },
  });
  return { isPending, updatePlaylistMutate };
}

export default useUpdatePlaylist;
