import { useState } from "react";
import { RiPlayFill } from "react-icons/ri";

function Item({ type, title, subtitle, size, nocontent = false }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${size === "large" ? "group flex-col rounded-md p-3 hover:bg-blue-50 dark:hover:bg-glass-100" : "items-center"} flex cursor-pointer gap-2`}
    >
      <div className={`${size === "large" && "relative"}`}>
        <img
          src="/test.png"
          alt=""
          className={` ${type === "artist" ? "rounded-full" : "rounded-sm"} ${size === "large" ? "w-full" : "h-12 w-12"}`}
        />
        {size === "large" && (
          <RiPlayFill
            className={`${isHovered ? "animation-show-playicon" : "animation-hide-playicon"} absolute bottom-1 right-1 hidden min-h-10 min-w-10 rounded-full bg-blue-600 p-2 text-white shadow-md duration-300 group-hover:inline-block`}
          />
        )}
      </div>

      {!nocontent && (
        <div className={`flex flex-col justify-center gap-1 text-sm`}>
          <p className="font-medium text-gray-900 dark:text-white">{title}</p>
          <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
        </div>
      )}
    </div>
  );
}

export default Item;
