import { useMutation } from "@tanstack/react-query";
import { play } from "../../../services/playerApi";
import toast from "react-hot-toast";

function usePlay() {
  const { isPending, mutate: playMutate } = useMutation({
    mutationKey: ["play"],
    mutationFn: play,
    onError: (error) => {
      if (error?.response?.data?.reason === "PREMIUM_REQUIRED")
        toast.error(
          "You need to have a premium account in order to play a song!",
        );
    },
  });
  return { isPending, playMutate };
}

export default usePlay;
