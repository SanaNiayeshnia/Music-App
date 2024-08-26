import { useQuery } from "@tanstack/react-query";
import { getUsersTopTracks } from "../../../services/usersApi";
import { useSelector } from "react-redux";

function useUsersTopTracks() {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: usersTopTracks } = useQuery({
    queryKey: ["user's-top-tracks"],
    queryFn: getUsersTopTracks,
    enabled: Boolean(accessToken),
  });
  return { isLoading, usersTopTracks };
}

export default useUsersTopTracks;
