import { TbLogout } from "react-icons/tb";
import useLogout from "./hooks/useLogout";
import { usePlayerContext } from "../../contexts/player/usePlayerContext";

function LogoutButton() {
  const { logout } = useLogout();
  const { player } = usePlayerContext();
  function onLogout() {
    player.disconnect();
    logout();
  }
  return (
    <TbLogout
      onClick={onLogout}
      className="h-7 w-7 cursor-pointer text-black duration-100 hover:text-blue-600 md:hidden dark:text-white"
    />
  );
}

export default LogoutButton;
