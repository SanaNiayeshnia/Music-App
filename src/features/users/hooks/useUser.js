import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../services/usersApi";

function useUser(id) {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });
  return { isLoading, user };
}

export default useUser;
