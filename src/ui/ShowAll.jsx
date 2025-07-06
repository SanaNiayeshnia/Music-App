import { Link } from "react-router-dom";
import useMainContext from "./layout/main/useMainContext";

function ShowAll({ className, to, children }) {
  const { scrollMainToTop } = useMainContext();

  return (
    <Link
      to={to}
      onClick={scrollMainToTop}
      className={`cursor-pointer text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white ${className}`}
    >
      {children}
    </Link>
  );
}

export default ShowAll;
