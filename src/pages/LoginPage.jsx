import { useSelector } from "react-redux";
import LoginForm from "../features/authentication/LoginForm";
import OfflineNotification from "../ui/OfflineNotification";

function LoginPage() {
  const { isOnLine } = useSelector((store) => store.authentication);

  return (
    <div className="grid h-screen place-items-center p-5">
      {isOnLine ? <LoginForm /> : <OfflineNotification />}
    </div>
  );
}

export default LoginPage;
