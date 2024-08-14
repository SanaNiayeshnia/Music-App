import { useMutation, useQueryClient } from "@tanstack/react-query";
import { followArtist } from "../../services/artistsAPi";

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
    },
  });

  return { isPending, followArtistMutate };
}

export default useFollowArtist;
