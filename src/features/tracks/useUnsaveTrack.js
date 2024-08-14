import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unsaveTrack } from "../../services/tracksApi";

function useUnsaveTrack(id) {
  const queryClient = useQueryClient();
  const { isPending, mutate: unsaveTrackMutate } = useMutation({
    mutationKey: ["unsave-tarck", id],
    mutationFn: () => unsaveTrack(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["is-track-saved", id]);
    },
  });
  return { isPending, unsaveTrackMutate };
}

export default useUnsaveTrack;
