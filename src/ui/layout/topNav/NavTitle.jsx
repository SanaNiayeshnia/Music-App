import PlayButton from "../../PlayButton";
import { formatName } from "../../../utilities/helper";
import { useSelector } from "react-redux";

function NavTitle({ children, noPlayButton }) {
  const { isSmall } = useSelector((store) => store.global);
  return (
    <div className="flex items-center gap-2">
      {!noPlayButton && <PlayButton />}

      <p
        className={`flex items-center gap-2 text-2xl font-bold text-black first-letter:uppercase dark:text-white`}
      >
        {children?.length > (isSmall ? 30 : 40)
          ? formatName(children, 20)
          : children}
      </p>
    </div>
  );
}

export default NavTitle;
