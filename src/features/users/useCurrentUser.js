import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authenticationApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../authentication/authSlice";

function useCurrentUser() {
  const dispatch = useDispatch();
  const { isLoading, data: user } = useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
  });
  useEffect(() => {
    if (user) dispatch(setUser(user));
  }, [user, dispatch]);
  return { isLoading, user };
}

export default useCurrentUser;
