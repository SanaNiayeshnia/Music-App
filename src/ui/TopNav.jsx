import DarkModeToggler from "./DarkModeToggler";
import NavigationArrows from "./NavigationArrows";
import UserAvatar from "../features/users/UserAvatar";
import useMainContext from "./layout/useMainContext";
import { useSelector } from "react-redux";
import NavTitle from "./NavTitle";
import Icon from "./Icon";
import { useLocation } from "react-router-dom";

function TopNav({ children }) {
  const { isMainScrolled } = useMainContext();
  const { pageTitle } = useSelector((store) => store.global);
  const loc = useLocation();
  const isSearchPage = loc.pathname.includes("/search");
  const isHomePage = Boolean(loc.pathname === "/");

  return (
    <div
      className={`${isMainScrolled ? "bg-white/50 shadow backdrop-blur-lg dark:bg-black/50" : "bg-transparent"} absolute right-0 top-0 z-50 flex w-full items-center justify-between px-3 py-3 md:gap-5 md:px-5`}
    >
      <div className="flex min-h-[52px] items-center gap-2">
        <NavigationArrows />
        {children}
        {!isMainScrolled && !isSearchPage && <Icon />}

        {pageTitle && isMainScrolled && (
          <NavTitle noPlayButton> {pageTitle}</NavTitle>
        )}
        {isHomePage && isMainScrolled && <Icon />}
      </div>

      <div className="flex items-center gap-2">
        <DarkModeToggler />
        <UserAvatar />
      </div>
    </div>
  );
}

export default TopNav;
