import {
  TbBookmark,
  TbBookmarkFilled,
  TbHome,
  TbHomeFilled,
  TbUser,
  TbUserFilled,
} from "react-icons/tb";
import BottomNavItem from "./BottomNavItem";
import { useDispatch } from "react-redux";
import { RiSearch2Fill, RiSearch2Line } from "react-icons/ri";
import { setQuery } from "../../../features/searchAndDiscovery/searchSlice";

function BottomNav() {
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute bottom-2 z-50 flex w-full justify-center px-3 md:hidden`}
    >
      <div
        className={`flex w-full items-center justify-around gap-5 rounded-full bg-white/50 px-5 py-3 shadow backdrop-blur-lg sm:gap-10 md:hidden dark:bg-black/50`}
      >
        <BottomNavItem
          icon={<TbHome />}
          activeIcon={<TbHomeFilled />}
          title="Home"
          href="/"
        />
        <BottomNavItem
          icon={<RiSearch2Line />}
          activeIcon={<RiSearch2Fill />}
          title="Search"
          href="/search"
          onClick={() => dispatch(setQuery(""))}
        />
        <BottomNavItem
          icon={<TbBookmark />}
          activeIcon={<TbBookmarkFilled />}
          title="Library"
          href="/library"
        />
        <BottomNavItem
          icon={<TbUser />}
          activeIcon={<TbUserFilled />}
          title="Profile"
          href="/account"
        />
      </div>
    </div>
  );
}

export default BottomNav;
