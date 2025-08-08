import { useMutation } from "@tanstack/react-query";
import { play } from "../../../services/playerApi";
import toast from "react-hot-toast";

function usePlay() {
  const { isPending, mutate: playMutate } = useMutation({
    mutationKey: ["play"],
    mutationFn: play,
    onError: (error) => {
      toast.error(error?.message);
    },
  });
  return { isPending, playMutate };
}

export default usePlay;
