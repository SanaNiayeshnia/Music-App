import { useQuery } from "@tanstack/react-query";
import { getCurrentlyPlaingTrack } from "../../../services/playerApi";
import { useSelector } from "react-redux";

function useCurrentlyPlayingTrack() {
  const { isAuthenticated } = useSelector((store) => store.authentication);

  const { isLoading, data: currentlyPlayingTrack } = useQuery({
    queryKey: ["currently-playing-track"],
    queryFn: getCurrentlyPlaingTrack,
    staleTime: 1000,
    enabled: Boolean(isAuthenticated),
  });

  return { isLoading, currentlyPlayingTrack };
}

export default useCurrentlyPlayingTrack;
