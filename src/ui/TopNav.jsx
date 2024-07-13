import SearchBox from "../features/searchAndDiscovery/SearchBox";
import DarkModeToggler from "./DarkModeToggler";
import { useLocation } from "react-router-dom";
import NavigationArrows from "./NavigationArrows";

function TopNav({ isMainScrolled }) {
  const location = useLocation();
  const locArr = location?.pathname?.split("/");
  const currentPath = locArr[locArr?.length - 1] || null;

  return (
    <div
      className={`${isMainScrolled ? "bg-white dark:bg-glass-100" : "bg-transparent"} absolute right-0 top-0 z-20 flex w-full items-center justify-between gap-5 px-5 py-3 lg:min-w-[425px]`}
    >
      <div className="flex min-h-[52px] items-center gap-2">
        <NavigationArrows />
        {currentPath === "search" && <SearchBox />}
      </div>

      <div className="flex items-center gap-2">
        <DarkModeToggler />
        <img
          src="./test.png"
          alt=""
          className="h-9 w-9 rounded-full border-4 border-blue-100 dark:border-blue-600"
        />
      </div>
    </div>
  );
}

export default TopNav;
