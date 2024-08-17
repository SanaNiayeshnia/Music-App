import { useState } from "react";
import { TbDots } from "react-icons/tb";
import useOutsideClick from "../hooks/useOutsideClick";

function ContextMenu({ options, position = "left" }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div ref={ref} className="relative">
      <TbDots
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="min-h-6 min-w-6 cursor-pointer text-black duration-100 hover:scale-105 hover:text-blue-600 dark:text-white"
      />
      {isOpen && (
        <ul
          className={`absolute ${position === "right" ? "left-[150%]" : "right-[130%]"} top-[0] min-w-48 overflow-hidden rounded bg-white text-sm dark:bg-black`}
        >
          {options.map((opt, index) => (
            <li
              key={index}
              onClick={() => {
                opt.handler();
                opt.close && setIsOpen(false);
              }}
              className="group/contextli flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-black hover:bg-blue-50 dark:text-white dark:hover:bg-white/10 [&_svg]:min-h-4 [&_svg]:min-w-4 [&_svg]:text-black [&_svg]:duration-100 dark:[&_svg]:text-white"
            >
              {opt.icon}
              {opt.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContextMenu;
