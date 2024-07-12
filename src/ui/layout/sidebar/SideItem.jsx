import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SideItem({ icon, title, href, activeIcon }) {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const { isSmallMedium } = useSelector((store) => store.global);
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `group flex cursor-pointer items-center gap-2 duration-300 *:text-gray-900 *:duration-100 first:*:min-h-6 first:*:min-w-6 *:dark:text-white ${isPlayingTrackbarOpen && isSmallMedium && "justify-center"} ${isActive ? "font-semibold first:*:text-blue-600" : "hover:pl-1"} `
      }
    >
      {({ isActive }) => (
        <>
          {isActive ? activeIcon : icon}

          <span
            className={`${isPlayingTrackbarOpen && isSmallMedium && "md:hidden"} text-gray-900 lg:inline-block dark:text-white`}
          >
            {title}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default SideItem;
