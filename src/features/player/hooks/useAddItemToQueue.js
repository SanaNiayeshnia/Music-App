import { useMutation } from "@tanstack/react-query";
import { addItemToQueue } from "../../../services/playerApi";
import toast from "react-hot-toast";

function useAddItemToQueue() {
  const { isPending, mutate: addItemToQueueMutate } = useMutation({
    mutationFn: addItemToQueue,
    mutationKey: ["add-item-to-queue"],
    onSuccess: () => toast("Item's been added to the queue."),
    onError: (error) => toast.error(error?.message),
  });
  return { isPending, addItemToQueueMutate };
}

export default useAddItemToQueue;
