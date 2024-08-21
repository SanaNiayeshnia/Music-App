import DarkModeToggler from "./DarkModeToggler";
import NavigationArrows from "./NavigationArrows";
import UserAvatar from "../features/users/UserAvatar";
import useMainContext from "./layout/useMainContext";
import { useSelector } from "react-redux";
import NavTitle from "./NavTitle";

function TopNav({ children }) {
  const { isMainScrolled } = useMainContext();
  const { pageTitle } = useSelector((store) => store.global);

  return (
    <div
      className={`${isMainScrolled ? "bg-white/70 shadow backdrop-blur-[100px] dark:bg-black/70" : "bg-transparent"} absolute right-0 top-0 z-50 flex w-full items-center justify-between px-3 py-3 md:gap-5 md:px-5`}
    >
      <div className="flex min-h-[52px] items-center gap-2">
        <NavigationArrows />
        {children}

        {pageTitle && isMainScrolled && (
          <NavTitle noPlayButton> {pageTitle}</NavTitle>
        )}
      </div>

      <div className="flex items-center gap-2">
        <DarkModeToggler />
        <UserAvatar />
      </div>
    </div>
  );
}

export default TopNav;
