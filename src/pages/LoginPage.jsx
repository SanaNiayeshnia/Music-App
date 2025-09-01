import { useSelector } from "react-redux";
import LoginForm from "../features/authentication/LoginForm";
import OfflineNotification from "../ui/OfflineNotification";
import { useEffect } from "react";

function LoginPage() {
  const { isOnLine } = useSelector((store) => store.authentication);

  useEffect(() => {
    document.title = `Login | ${import.meta.env.VITE_APP_NAME}`;
  }, []);

  return (
    <div className="grid h-screen place-items-center p-5">
      {isOnLine ? <LoginForm /> : <OfflineNotification />}
    </div>
  );
}

export default LoginPage;
