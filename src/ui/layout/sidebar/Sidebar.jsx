import { TbHome, TbHomeFilled } from "react-icons/tb";
import SideItem from "./SideItem";
import { RiSearch2Fill, RiSearch2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../../features/searchAndDiscovery/searchSlice";
function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="hidden flex-col justify-center gap-4 rounded-lg bg-white/50 px-4 py-5 shadow-lg backdrop-blur-md md:flex dark:bg-black/50">
      <SideItem
        icon={<TbHome />}
        activeIcon={<TbHomeFilled />}
        title="Home"
        href="/"
      />
      <SideItem
        icon={<RiSearch2Line />}
        activeIcon={<RiSearch2Fill />}
        title="Search"
        href="/search"
        onClick={() => dispatch(setQuery(""))}
      />
    </div>
  );
}

export default Sidebar;
