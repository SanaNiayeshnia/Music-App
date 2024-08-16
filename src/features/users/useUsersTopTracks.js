import { useQuery } from "@tanstack/react-query";
import { getUsersTopTracks } from "../../services/usersApi";

function useUsersTopTracks() {
  const { isLoading, data: usersTopTracks } = useQuery({
    queryKey: ["user's-top-tracks"],
    queryFn: getUsersTopTracks,
  });
  return { isLoading, usersTopTracks };
}

export default useUsersTopTracks;
