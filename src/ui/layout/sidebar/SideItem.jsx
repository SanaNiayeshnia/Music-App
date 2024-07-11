import { NavLink } from "react-router-dom";

function SideItem({ icon, title, href, activeIcon }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `group flex cursor-pointer items-center gap-2 text-gray-900 duration-300 first:*:min-h-6 first:*:min-w-6 has-[.active]:text-blue-600 dark:text-gray-100 ${isActive ? "font-semibold first:*:text-blue-600" : "hover:pl-1"} `
      }
    >
      {({ isActive }) => (
        <>
          {isActive ? activeIcon : icon} <span>{title}</span>
        </>
      )}
    </NavLink>
  );
}

export default SideItem;
