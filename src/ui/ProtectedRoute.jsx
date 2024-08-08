import { useEffect } from "react";
import useAccessToken from "../features/authentication/useAccessToken";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import OfflineNotification from "./OfflineNotification";

function ProtectedRoute({ children }) {
  const { isOnLine } = useSelector((store) => store.authentication);
  const { isLoading, isAuthenticated } = useAccessToken();
  const navigate = useNavigate();

  useEffect(() => {
    //go to login page if the user isn't authenticated
    if (!isLoading && !isAuthenticated && isOnLine) navigate("/login");
  }, [navigate, isAuthenticated, isLoading, isOnLine]);

  if (!isOnLine)
    return (
      <div className="grid h-screen place-items-center p-5">
        <OfflineNotification />
      </div>
    );

  if (isLoading)
    return (
      <div className="grid h-screen place-items-center">
        <Spinner />
      </div>
    );

  if (!isLoading && isAuthenticated) return children;
  else null;
}

export default ProtectedRoute;
