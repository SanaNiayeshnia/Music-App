import SearchBox from "../features/searchAndDiscovery/SearchBox";
import DarkModeToggler from "./DarkModeToggler";
import { useLocation } from "react-router-dom";
import NavigationArrows from "./NavigationArrows";

function TopNav() {
  const location = useLocation();
  const locArr = location?.pathname?.split("/");
  const currentPath = locArr[locArr?.length - 1] || null;

  return (
    <div className="mb-3 flex w-full min-w-[425px] items-center justify-between gap-5 px-3">
      <div className="flex min-h-[52px] items-center gap-2">
        <NavigationArrows />
        {currentPath === "search" && <SearchBox />}
      </div>

      <div className="flex items-center gap-2">
        <DarkModeToggler />
        <img
          src="./test.png"
          alt=""
          className="h-9 w-9 rounded-full border-4 border-blue-100"
        />
      </div>
    </div>
  );
}

export default TopNav;
