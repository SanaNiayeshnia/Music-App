import { useQuery } from "@tanstack/react-query";
import { getCurrentlyPlaingTrack } from "../../../services/playerApi";

function useCurrentlyPlayingTrack() {
  const { isLoading, data: currentlyPlayingTrack } = useQuery({
    queryKey: ["currently-playing-track"],
    queryFn: getCurrentlyPlaingTrack,
    staleTime: 1000,
  });

  return { isLoading, currentlyPlayingTrack };
}

export default useCurrentlyPlayingTrack;
