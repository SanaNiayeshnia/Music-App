import { TbArrowBackUp, TbArrowForwardUp } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

function NavigationArrows() {
  const navigate = useNavigate();
  const location = useLocation();
  const isOnTheMainPage = location?.pathname === "/";
  const isFirstTimeOnTheMainPage = location?.key === "default";

  return (
    <div className="hidden items-center gap-1 md:flex">
      <TbArrowBackUp
        onClick={() => (isOnTheMainPage ? null : navigate(-1))}
        className={`${isOnTheMainPage ? "cursor-not-allowed bg-blue-500 text-white/80" : "cursor-pointer text-white hover:bg-blue-700"} min-h-8 min-w-8 rounded-full bg-blue-600 p-1 shadow-md`}
      />
      <TbArrowForwardUp
        onClick={() => (isFirstTimeOnTheMainPage ? null : navigate(+1))}
        className={`${isFirstTimeOnTheMainPage ? "cursor-not-allowed bg-blue-500 text-white/80" : "cursor-pointer text-white hover:bg-blue-700"} hidden min-h-8 min-w-8 rounded-full bg-blue-600 p-1 shadow-md lg:inline-block`}
      />
    </div>
  );
}

export default NavigationArrows;
