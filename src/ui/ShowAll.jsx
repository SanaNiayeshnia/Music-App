import { Link } from "react-router-dom";
import useMainContext from "./layout/useMainContext";

function ShowAll({ children, className, to }) {
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
