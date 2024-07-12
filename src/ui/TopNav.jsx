import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import SearchBox from "../features/searchAndDiscovery/SearchBox";
import DarkModeToggler from "./DarkModeToggler";
import { useLocation } from "react-router-dom";
import { current } from "@reduxjs/toolkit";
import NavigatorArrows from "./NavigatorArrows";

function TopNav() {
  const location = useLocation();
  const locArr = location?.pathname?.split("/");
  const currentPath = locArr[locArr?.length - 1] || null;

  return (
    <div className="absolute right-0 top-0 flex w-full items-center justify-between px-4 py-3">
      <div className="flex min-h-[52px] items-center gap-2">
        <NavigatorArrows />
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
