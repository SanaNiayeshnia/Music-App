import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleShuffle } from "../../../services/playerApi";
import toast from "react-hot-toast";

function useToggleShuffle() {
  const queryClient = useQueryClient();
  const { isPending, mutate: toggleShuffleMutate } = useMutation({
    mutationFn: toggleShuffle,
    mutationKey: ["shuffle"],
    onError: (error) => toast.error(error.message),
    onSuccess: () => {
      queryClient.invalidateQueries(["queue"]);
    },
  });
  return { isPending, toggleShuffleMutate };
}

export default useToggleShuffle;
