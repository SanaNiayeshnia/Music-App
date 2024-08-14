import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveTrack } from "../../services/tracksApi";

function useSaveTrack(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: saveTrackMutate } = useMutation({
    mutationKey: ["save-track", id],
    mutationFn: () => saveTrack(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["is-track-saved", id]);
    },
  });
  return { isPending, saveTrackMutate };
}

export default useSaveTrack;
