import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../GlobalSlice";

function DarkModeToggler() {
  const { isDarkMode } = useSelector((store) => store.global);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex items-center gap-1 overflow-hidden rounded-full ${isDarkMode ? "bg-blue-600" : "bg-blue-100"} p-1`}
    >
      <RiSunFill
        className={`${isDarkMode ? "cursor-pointer text-white" : "bg-white text-orange-400"} min-h-7 min-w-7 rounded-full p-1 duration-100 ease-linear`}
        onClick={() => (isDarkMode ? dispatch(toggleDarkMode("light")) : null)}
      />
      <RiMoonFill
        className={`${isDarkMode ? "bg-white text-blue-900" : "cursor-pointer text-gray-600"} min-h-7 min-w-7 rounded-full p-1 duration-100 ease-linear`}
        onClick={() => (!isDarkMode ? dispatch(toggleDarkMode("dark")) : null)}
      />
    </div>
  );
}

export default DarkModeToggler;
