import DarkModeToggler from "./DarkModeToggler";
import NavigationArrows from "./NavigationArrows";
import UserAvatar from "../../../features/users/UserAvatar";
import useMainContext from "../main/useMainContext";
import { useSelector } from "react-redux";
import NavTitle from "./NavTitle";
import { useLocation } from "react-router-dom";
import IconLogo from "./IconLogo";
import LogoutButton from "../../../features/authentication/LogoutButton";

function TopNav({ children }) {
  const { isMainScrolled } = useMainContext();
  const { pageTitle, isSmall } = useSelector((store) => store.global);
  const loc = useLocation();
  const isSearchPage = loc.pathname.includes("/search");
  const isAccountPage = loc.pathname.includes("/account");
  const isHomePage = Boolean(loc.pathname === "/");

  return (
    <div
      className={`${isMainScrolled ? "bg-white/50 shadow backdrop-blur-lg dark:bg-black/50" : "bg-transparent"} absolute right-0 top-0 z-50 flex w-full items-center justify-between gap-2 px-3 py-3 md:px-5`}
    >
      <div className="flex min-h-[52px] items-center gap-2">
        <NavigationArrows />
        {children}
        {!isMainScrolled && !isSearchPage && <IconLogo />}

        {pageTitle && isMainScrolled && (
          <NavTitle noPlayButton> {pageTitle}</NavTitle>
        )}
        {isHomePage && isMainScrolled && <IconLogo />}
      </div>

      <div className="flex items-center gap-2">
        <DarkModeToggler />
        {!isSmall && <UserAvatar />}
        {isSmall && isAccountPage && <LogoutButton />}
      </div>
    </div>
  );
}

export default TopNav;
