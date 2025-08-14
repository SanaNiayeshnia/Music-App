import { useQuery } from "@tanstack/react-query";
import { getQueue } from "../../../services/playerApi";

function useQueue() {
  const { isLoading, data } = useQuery({
    queryKey: ["queue"],
    queryFn: getQueue,
  });

  return { isLoading, queue: data || {} };
}

export default useQueue;
