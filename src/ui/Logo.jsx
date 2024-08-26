import { useSelector } from "react-redux";
import Cover from "./Cover";

function Logo() {
  const { isDarkMode } = useSelector((store) => store.global);

  return (
    <div>
      <Cover image={`/album-cover-${isDarkMode ? "dark" : "light"}.jpeg`} />
    </div>
  );
}

export default Logo;
