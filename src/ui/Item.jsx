import { useState } from "react";
import PlayButton from "./PlayButton";
import FloatingPlayButton from "./FloatingPlayButton";

function Item({ type, title, subtitle, size, nocontent = false }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${size === "large" ? "group flex-col p-3" : "items-center p-2"} flex cursor-pointer gap-2 rounded-md hover:bg-blue-50 dark:hover:bg-glass-100`}
    >
      <div className={`${size === "large" && "relative"}`}>
        <img
          src="/test.png"
          alt=""
          className={` ${type === "artist" ? "rounded-full" : "rounded"} ${size === "large" ? "w-full" : "h-12 w-12"}`}
        />
        {size === "large" && <FloatingPlayButton isHovered={isHovered} />}
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
