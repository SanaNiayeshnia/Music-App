import { useMutation, useQueryClient } from "@tanstack/react-query";
import { followArtist } from "../../../services/artistsAPi";
import toast from "react-hot-toast";

function useFollowArtist(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: followArtistMutate } = useMutation({
    mutationKey: ["follow-artist", id],
    mutationFn: () => followArtist(id),
    onError: (err) => err.message,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["is-artist-being-followed", id],
      });
      queryClient.invalidateQueries({ queryKey: ["followed-artists"] });
      toast("Added to your library");
    },
  });

  return { isPending, followArtistMutate };
}

export default useFollowArtist;
