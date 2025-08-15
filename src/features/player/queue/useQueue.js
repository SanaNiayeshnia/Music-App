import { useQuery } from "@tanstack/react-query";
import { getQueue } from "../../../services/playerApi";
import { usePlayerContext } from "../../../contexts/player/usePlayerContext";

function useQueue() {
  const { currentTrack, playerState } = usePlayerContext();
  const { isLoading, data } = useQuery({
    queryKey: ["queue", currentTrack?.id, playerState?.loading],
    queryFn: getQueue,
  });

  return { isLoading, queue: data || {} };
}

export default useQueue;
