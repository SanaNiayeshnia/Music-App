import { Link } from "react-router-dom";

function ShowAll({ children, className, to }) {
  return (
    <Link
      to={to}
      className={`mt-5 cursor-pointer text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
}

export default ShowAll;
