import { TbHome, TbHomeFilled } from "react-icons/tb";
import BottomNavItem from "./BottomNavItem";
import { useSelector } from "react-redux";

function BottomNav() {
  const { isSmall } = useSelector((store) => store.global);

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
          icon={<TbHome />}
          activeIcon={<TbHomeFilled />}
          title="Home"
          href="/"
        />{" "}
        <BottomNavItem
          icon={<TbHome />}
          activeIcon={<TbHomeFilled />}
          title="Home"
          href="/"
        />{" "}
        <BottomNavItem
          icon={<TbHome />}
          activeIcon={<TbHomeFilled />}
          title="Home"
          href="/"
        />
      </div>
    </div>
  );
}

export default BottomNav;
