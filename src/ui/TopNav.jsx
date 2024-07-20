import { useSelector } from "react-redux";
import DarkModeToggler from "./DarkModeToggler";
import NavigationArrows from "./NavigationArrows";
import UserAvatar from "./UserAvatar";

function TopNav({ children, transparent }) {
  const { isMainScrolled } = useSelector((store) => store.global);

  return (
    <div
      className={`${isMainScrolled ? "bg-white/80 shadow backdrop-blur-[100px] dark:bg-black/80" : "bg-transparent"} absolute right-0 top-0 z-20 flex w-full items-center justify-between gap-5 px-5 py-3 lg:min-w-[425px]`}
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
