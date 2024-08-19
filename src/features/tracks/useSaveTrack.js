import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveTrack } from "../../services/tracksApi";
import toast from "react-hot-toast";

function useSaveTrack(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: saveTrackMutate } = useMutation({
    mutationKey: ["save-track", id],
    mutationFn: () => saveTrack(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["is-track-saved", id]);
      queryClient.invalidateQueries(["playlist", "LikedSongs"]);

      toast("Added to your liked songs");
    },
  });
  return { isPending, saveTrackMutate };
}

export default useSaveTrack;
