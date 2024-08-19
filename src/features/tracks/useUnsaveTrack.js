import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unsaveTrack } from "../../services/tracksApi";
import toast from "react-hot-toast";

function useUnsaveTrack(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: unsaveTrackMutate } = useMutation({
    mutationKey: ["unsave-tarck", id],
    mutationFn: () => unsaveTrack(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["is-track-saved", id]);
      queryClient.invalidateQueries(["playlist", "LikedSongs"]);

      toast("Removed from your liked songs");
    },
  });
  return { isPending, unsaveTrackMutate };
}

export default useUnsaveTrack;
