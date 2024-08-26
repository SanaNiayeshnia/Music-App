import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../services/usersApi";
import { useSelector } from "react-redux";

function useUser(id) {
  const { accessToken } = useSelector((store) => store.authentication);

  const { isLoading, data: user } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: Boolean(accessToken),
  });
  return { isLoading, user };
}

export default useUser;
