import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unfollowArtist } from "../../services/artistsAPi";
import toast from "react-hot-toast";

function useUnfollowArtist(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: unfollowArtistMutate } = useMutation({
    mutationKey: ["unfollow-artist", id],
    mutationFn: () => unfollowArtist(id),
    onError: (err) => err.message,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["is-artist-being-followed", id],
      });
      queryClient.invalidateQueries({ queryKey: ["followed-artists"] });
      toast("Removed from your library");
    },
  });

  return { isPending, unfollowArtistMutate };
}

export default useUnfollowArtist;
