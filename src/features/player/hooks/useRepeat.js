import { useMutation, useQueryClient } from "@tanstack/react-query";
import { repeat } from "../../../services/playerApi";
import toast from "react-hot-toast";

function useRepeat() {
  const queryClient = useQueryClient();
  const { isPending, mutate: repeatMutate } = useMutation({
    mutationFn: repeat,
    mutationKey: ["repeat"],
    onError: (error) => toast.error(error.message),
    onSuccess: () => {
      queryClient.invalidateQueries(["queue"]);
    },
  });
  return { isPending, repeatMutate };
}

export default useRepeat;
