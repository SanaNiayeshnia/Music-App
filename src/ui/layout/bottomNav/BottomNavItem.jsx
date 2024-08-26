import { NavLink } from "react-router-dom";
import useMainContext from "../main/useMainContext";

function BottomNavItem({ icon, title, href, activeIcon, onClick }) {
  const { scrollMainToTop } = useMainContext();

  return (
    <NavLink
      to={href}
      onClick={() => {
        onClick && onClick();
        scrollMainToTop();
      }}
      className={({ isActive }) =>
        `group flex cursor-pointer flex-col items-center gap-1 duration-300 *:text-gray-900 *:duration-100 first:*:min-h-6 first:*:min-w-6 *:dark:text-white ${isActive ? "font-semibold first:*:text-blue-600" : "transition-transform hover:scale-105"} `
      }
    >
      {({ isActive }) => (
        <>
          {isActive ? activeIcon : icon}

          <span className={`text-sm text-gray-900 dark:text-white`}>
            {title}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default BottomNavItem;
