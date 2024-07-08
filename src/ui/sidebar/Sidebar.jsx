import SideItem from "./SideItem";
import {
  RiHomeSmileFill,
  RiHomeSmileLine,
  RiSearch2Fill,
  RiSearch2Line,
} from "react-icons/ri";
function Sidebar() {
  return (
    <div className="dark:bg-glass flex flex-col justify-center gap-4 rounded-md bg-white px-5 py-2 shadow-md">
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
