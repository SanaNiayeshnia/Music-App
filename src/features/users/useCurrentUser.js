import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authenticationApi";

function useCurrentUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
  });
  return { isLoading, user };
}

export default useCurrentUser;
