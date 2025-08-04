import { TbLogout } from "react-icons/tb";
import useLogout from "./hooks/useLogout";

function LogoutButton() {
  const { logout } = useLogout();
  return (
    <TbLogout
      onClick={logout}
      className="h-7 w-7 cursor-pointer text-black duration-100 hover:text-blue-600 md:hidden dark:text-white"
    />
  );
}

export default LogoutButton;
