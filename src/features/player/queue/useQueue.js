import { useQuery } from "@tanstack/react-query";
import { getQueue } from "../../../services/playerApi";

function useQueue() {
  const { isLoading, data: queue } = useQuery({
    queryKey: ["queue"],
    queryFn: getQueue,
  });

  return { isLoading, queue };
}

export default useQueue;
