import SearchBox from "../features/searchAndDiscovery/SearchBox";
import DarkModeToggler from "./DarkModeToggler";
import { useLocation } from "react-router-dom";
import NavigationArrows from "./NavigationArrows";
import UserAvatar from "./UserAvatar";

function TopNav({ isMainScrolled }) {
  const location = useLocation();
  const locArr = location?.pathname?.split("/");
  const currentPath = locArr[locArr?.length - 1] || null;

  return (
    <div
      className={`${isMainScrolled ? "bg-white dark:bg-black" : "bg-transparent"} absolute right-0 top-0 z-20 flex w-full items-center justify-between gap-5 px-5 py-3 lg:min-w-[425px]`}
    >
      <div className="flex min-h-[52px] items-center gap-2">
        <NavigationArrows />
        {currentPath === "search" && <SearchBox />}
      </div>

      <div className="flex items-center gap-2">
        <DarkModeToggler />
        <UserAvatar />
      </div>
    </div>
  );
}

export default TopNav;
