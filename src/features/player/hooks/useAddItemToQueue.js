import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemToQueue } from "../../../services/playerApi";
import toast from "react-hot-toast";

function useAddItemToQueue() {
  const queryClient = useQueryClient();
  const { isPending, mutate: addItemToQueueMutate } = useMutation({
    mutationFn: addItemToQueue,
    mutationKey: ["add-item-to-queue"],
    onSuccess: () => {
      toast("Item's been added to the queue.");
      setTimeout(() => {
        queryClient.invalidateQueries(["queue"]);
      }, 3000);
    },
    onError: (error) => toast.error(error?.message),
  });
  return { isPending, addItemToQueueMutate };
}

export default useAddItemToQueue;
