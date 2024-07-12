import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

function NavigationArrows() {
  const navigate = useNavigate();
  const location = useLocation();
  const isOnTheMainPage = location?.pathname === "/";
  const isFirstTimeOnTheMainPage = location?.key === "default";

  return (
    <div className="flex items-center gap-1">
      <RiArrowLeftSLine
        onClick={() => (isOnTheMainPage ? null : navigate(-1))}
        className={`${isOnTheMainPage ? "cursor-not-allowed text-gray-600 dark:text-gray-300" : "cursor-pointer text-gray-900 hover:bg-blue-100 dark:text-white dark:hover:bg-glass-200"} min-h-8 min-w-8 rounded-full bg-blue-50 p-1 dark:bg-glass-100`}
      />
      <RiArrowRightSLine
        onClick={() => (isFirstTimeOnTheMainPage ? null : navigate(+1))}
        className={`${isFirstTimeOnTheMainPage ? "cursor-not-allowed text-gray-600 dark:text-gray-300" : "cursor-pointer text-gray-900 hover:bg-blue-100 dark:text-white dark:hover:bg-glass-200"} min-h-8 min-w-8 rounded-full bg-blue-50 p-1 dark:bg-glass-100`}
      />
    </div>
  );
}

export default NavigationArrows;
