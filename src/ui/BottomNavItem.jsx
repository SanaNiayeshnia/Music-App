import { NavLink } from "react-router-dom";
import useMainContext from "./layout/useMainContext";

function BottomNavItem({ icon, title, href, activeIcon }) {
  const { scrollMainToTop } = useMainContext();

  return (
    <NavLink
      to={href}
      onClick={() => scrollMainToTop()}
      className={({ isActive }) =>
        `group flex cursor-pointer flex-col items-center gap-1 duration-300 *:text-gray-900 *:duration-100 first:*:min-h-6 first:*:min-w-6 *:dark:text-white ${isActive ? "font-semibold first:*:text-blue-600" : "hover:pl-1"} `
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
