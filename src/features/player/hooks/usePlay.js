import { useMutation } from "@tanstack/react-query";
import { play } from "../../../services/playerApi";
import toast from "react-hot-toast";
import { usePlayerContext } from "./usePlayerContext";

function usePlay() {
  const { deviceId } = usePlayerContext();
  const { isPending, mutate: playMutate } = useMutation({
    mutationKey: ["play"],
    mutationFn: (data) => play({ ...data, deviceId: deviceId }),
    onError: (error) => {
      toast.error(error?.message);
    },
  });
  return { isPending, playMutate };
}

export default usePlay;
