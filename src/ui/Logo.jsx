import { useSelector } from "react-redux";
import Cover from "./Cover";

function Logo() {
  const { isDarkMode } = useSelector((store) => store.global);

  return (
    <div>
      <Cover
        image={`/album-cover-${isDarkMode ? "dark" : "light"}.jpeg`}
        className="-ml-8 h-52 w-52 md:ml-auto"
      />
    </div>
  );
}

export default Logo;
