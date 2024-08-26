import { useQuery } from "@tanstack/react-query";
import { getUsersSavedTracks } from "../../../services/tracksApi";
import { useSelector } from "react-redux";

function useSavedTracks() {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data } = useQuery({
    queryKey: ["saved-tracks"],
    queryFn: getUsersSavedTracks,
    enabled: Boolean(accessToken),
  });
  const savedTracks = data?.items?.map((item) => item.track);
  return { isLoading, savedTracks };
}

export default useSavedTracks;
