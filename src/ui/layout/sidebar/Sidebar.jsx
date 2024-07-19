import SideItem from "./SideItem";
import {
  RiHomeSmileFill,
  RiHomeSmileLine,
  RiSearch2Fill,
  RiSearch2Line,
} from "react-icons/ri";
function Sidebar() {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-md bg-white/40 px-4 py-5 shadow-lg backdrop-blur-md dark:bg-black/40">
      <SideItem
        icon={<RiHomeSmileLine />}
        activeIcon={<RiHomeSmileFill />}
        title="Home"
        href="/"
      />
      <SideItem
        icon={<RiSearch2Line />}
        activeIcon={<RiSearch2Fill />}
        title="Search"
        href="/search"
      />
    </div>
  );
}

export default Sidebar;
