import { useEffect } from "react";
import useAccessToken from "../../../features/authentication/hooks/useAccessToken";
import Spinner from "../../Spinner";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import OfflineNotification from "../../OfflineNotification";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useAccessToken(); //get a new access token
  const { isOnLine } = useSelector((store) => store.authentication);
  const navigate = useNavigate();

  useEffect(() => {
    //go to login page if the user isn't authenticated
    if (!isLoading && !isAuthenticated && isOnLine) navigate("/admin/login");
  }, [navigate, isAuthenticated, isLoading, isOnLine]);

  if (!isOnLine)
    return (
      <div className="grid h-screen place-items-center p-5">
        <OfflineNotification />
      </div>
    );

  if (isLoading)
    return (
      <div className="grid h-[98vh] place-items-center">
        <Spinner />
      </div>
    );

  if (!isLoading && isAuthenticated) return children;
}

export default ProtectedRoute;
