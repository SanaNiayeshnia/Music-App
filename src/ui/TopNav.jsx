import { useSelector } from "react-redux";
import DarkModeToggler from "./DarkModeToggler";
import NavigationArrows from "./NavigationArrows";
import UserAvatar from "../features/users/UserAvatar";

function TopNav({ children, transparent }) {
  const { isMainScrolled } = useSelector((store) => store.global);

  return (
    <div
      className={`${isMainScrolled ? "bg-white/70 shadow backdrop-blur-[100px] dark:bg-black/70" : "bg-transparent"} absolute right-0 top-0 z-50 flex w-full items-center justify-between gap-5 px-5 py-3`}
    >
      <div className="flex min-h-[52px] items-center gap-2">
        <NavigationArrows />
        {children}
      </div>

      <div className="flex items-center gap-2">
        <DarkModeToggler />
        <UserAvatar />
      </div>
    </div>
  );
}

export default TopNav;
