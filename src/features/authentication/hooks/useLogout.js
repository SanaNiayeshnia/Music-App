import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { logoutAccount } from "../authSlice";
import { useNavigate } from "react-router-dom";
import { resetPlayerSlice } from "../../player/PlaybackSlice";
import { usePlayerContext } from "../../player/hooks/usePlayerContext";

function useLogout() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { player } = usePlayerContext();

  function logout() {
    player.disconnect();
    dispatch(logoutAccount());
    dispatch(resetPlayerSlice());

    // invalidate access token query to ensure it doesn't run again to fetch another access token
    queryClient.removeQueries(["access-token"], { exact: true });

    navigate("/login");
  }
  return { logout };
}

export default useLogout;
