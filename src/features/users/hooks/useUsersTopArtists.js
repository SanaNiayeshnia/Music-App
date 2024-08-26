import { useQuery } from "@tanstack/react-query";
import { getUsersTopArtists } from "../../../services/usersApi";

function useUsersTopArtists() {
  const { isLoading, data: usersTopArtists } = useQuery({
    queryKey: ["user's-top-artists"],
    queryFn: getUsersTopArtists,
  });
  return { isLoading, usersTopArtists };
}

export default useUsersTopArtists;
