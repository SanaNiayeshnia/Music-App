import { useMutation } from "@tanstack/react-query";
import { toggleShuffle } from "../../../services/playerApi";
import toast from "react-hot-toast";

function useToggleShuffle() {
  const { isPending, mutate: toggleShuffleMutate } = useMutation({
    mutationFn: toggleShuffle,
    mutationKey: ["shuffle"],
    onError: (error) => toast.error(error.message),
  });
  return { isPending, toggleShuffleMutate };
}

export default useToggleShuffle;
