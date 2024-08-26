import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/authenticationApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../authSlice";

function useCurrentUser() {
  const { accessToken } = useSelector((store) => store.authentication);
  const dispatch = useDispatch();
  const { isLoading, data: user } = useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    enabled: Boolean(accessToken),
  });
  useEffect(() => {
    if (user) dispatch(setUser(user));
  }, [user, dispatch]);
  return { isLoading, user };
}

export default useCurrentUser;
