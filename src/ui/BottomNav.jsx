import {
  TbBookmark,
  TbBookmarkFilled,
  TbHome,
  TbHomeFilled,
  TbUser,
  TbUserFilled,
} from "react-icons/tb";
import BottomNavItem from "./BottomNavItem";
import { useDispatch, useSelector } from "react-redux";
import { RiSearch2Fill, RiSearch2Line } from "react-icons/ri";
import { setQuery } from "../features/searchAndDiscovery/searchSlice";

function BottomNav() {
  const { isSmall } = useSelector((store) => store.global);
  const dispatch = useDispatch();

  return (
    <div
      className={`${isSmall ? "flex" : "hidden"} absolute bottom-2 flex w-full justify-center px-3`}
    >
      <div
        className={`${isSmall ? "flex" : "hidden"} w-full items-center justify-around gap-10 rounded-full bg-white/50 px-5 py-3 backdrop-blur-lg dark:bg-black/50`}
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
