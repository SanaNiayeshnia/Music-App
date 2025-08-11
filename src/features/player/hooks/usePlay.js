import { useMutation } from "@tanstack/react-query";
import { play } from "../../../services/playerApi";
import toast from "react-hot-toast";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";

function usePlay() {
  const { state } = usePlayerContext();
  const { isPending, mutate: playMutate } = useMutation({
    mutationKey: ["play"],
    mutationFn: (uri) => play({ uri, deviceId: state?.deviceId }),
    onError: (error) => {
      toast.error(error?.message);
    },
  });
  return { isPending, playMutate };
}

export default usePlay;
