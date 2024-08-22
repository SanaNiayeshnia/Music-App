import { Link } from "react-router-dom";
import { APP_NAME } from "../utilities/constants";

function Icon({ className, noTitle }) {
  return (
    <Link className="flex items-center gap-1.5" to="/">
      <img
        className={`${className} h-10 w-10`}
        src="/icon.png"
        alt={APP_NAME}
      />
      {!noTitle && (
        <p className="text-2xl font-bold text-black dark:text-white">
          {APP_NAME}
        </p>
      )}
    </Link>
  );
}

export default Icon;
