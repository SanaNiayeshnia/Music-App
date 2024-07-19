import { useEffect } from "react";
import useAccessToken from "../features/authentication/useAccessToken";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useAccessToken();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/login");
  }, [navigate, isAuthenticated, isLoading]);

  if (isLoading)
    return (
      <div className="grid h-screen place-items-center">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
  else null;
}

export default ProtectedRoute;
