import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../GlobalSlice";

function DarkModeToggler() {
  const { isDarkMode } = useSelector((store) => store.global);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex min-w-16 items-center gap-1 overflow-hidden rounded-full bg-blue-600 p-1 shadow-md`}
    >
      <RiSunFill
        className={`${isDarkMode ? "cursor-pointer text-white hover:rotate-[360deg]" : "bg-white text-orange-400"} min-h-7 min-w-7 rounded-full p-1 duration-100 ease-linear`}
        onClick={() => (isDarkMode ? dispatch(toggleDarkMode()) : null)}
      />
      <RiMoonFill
        className={`${isDarkMode ? "bg-white text-blue-900" : "cursor-pointer text-white hover:rotate-[360deg]"} min-h-7 min-w-7 rounded-full p-1 duration-100 ease-linear`}
        onClick={() => (!isDarkMode ? dispatch(toggleDarkMode()) : null)}
      />
    </div>
  );
}

export default DarkModeToggler;
