import { useQuery } from "@tanstack/react-query";
import { getUsersTopArtists } from "../../../services/usersApi";
import { useSelector } from "react-redux";

function useUsersTopArtists() {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: usersTopArtists } = useQuery({
    queryKey: ["user's-top-artists"],
    queryFn: getUsersTopArtists,
    enabled: Boolean(accessToken),
  });
  return { isLoading, usersTopArtists };
}

export default useUsersTopArtists;
