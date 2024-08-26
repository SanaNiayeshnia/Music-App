import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useMainContext from "../Main/useMainContext";

function SideItem({ icon, title, href, activeIcon, onClick }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { scrollMainToTop } = useMainContext();
  return (
    <NavLink
      to={href}
      onClick={() => {
        onClick && onClick();
        scrollMainToTop();
      }}
      className={({ isActive }) =>
        `group flex cursor-pointer items-center gap-2 duration-300 *:text-gray-900 *:duration-100 first:*:min-h-6 first:*:min-w-6 lg:justify-start *:dark:text-white ${isPlayingTrackbarOpen && "md:justify-center"} ${isActive ? "font-semibold first:*:text-blue-600" : "hover:pl-1"} `
      }
    >
      {({ isActive }) => (
        <>
          {isActive ? activeIcon : icon}

          <span
            className={`${isPlayingTrackbarOpen && "md:hidden"} text-gray-900 lg:inline-block dark:text-white`}
          >
            {title}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default SideItem;
