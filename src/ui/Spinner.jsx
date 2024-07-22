import { useSelector } from "react-redux";
import GramophoneDisc from "./GramophoneDisc";

function Spinner() {
  const { isDarkMode } = useSelector((store) => store.global);
  return (
    <div className="relative h-32 w-32">
      <GramophoneDisc
        image={`/album-cover-${isDarkMode ? "dark" : "light"}.jpeg`}
        className="left-0 animate-spin"
      />
    </div>
  );
}

export default Spinner;
