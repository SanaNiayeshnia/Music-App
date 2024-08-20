import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { logoutAccount } from "../authentication/authSlice";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logout() {
    dispatch(logoutAccount());

    // invalidate access token query to ensure it doesn't run again to fetch another access token
    queryClient.removeQueries(["access-token"], { exact: true });

    navigate("/login");
  }
  return { logout };
}

export default useLogout;
