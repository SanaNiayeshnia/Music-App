import { useMutation } from "@tanstack/react-query";
import { repeat } from "../../../services/playerApi";
import toast from "react-hot-toast";

function useRepeat() {
  const { isPending, mutate: repeatMutate } = useMutation({
    mutationFn: repeat,
    mutationKey: ["repeat"],
    onError: (error) => toast.error(error),
  });
  return { isPending, repeatMutate };
}

export default useRepeat;
