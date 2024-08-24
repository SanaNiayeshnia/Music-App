import { TbLogout } from "react-icons/tb";
import useLogout from "../users/useLogout";

function LogoutButton() {
  const { logout } = useLogout();
  return (
    <TbLogout
      onClick={logout}
      className="h-7 w-7 text-black hover:text-blue-600 dark:text-white"
    />
  );
}

export default LogoutButton;
