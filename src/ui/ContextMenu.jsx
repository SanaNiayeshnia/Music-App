import useOutsideClick from "../hooks/useOutsideClick";
import { useEffect, useState } from "react";

function ContextMenu({
  options,
  position = "left",
  close = false,
  setIsUsingContextMenu,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => {
    setIsUsingContextMenu && setIsUsingContextMenu(false);
    setIsOpen(false);
  });

  useEffect(() => {
    if (close) {
      setIsOpen(false);
      setIsUsingContextMenu && setIsUsingContextMenu(false);
    }
  }, [close, setIsUsingContextMenu]);

  return (
    <div ref={ref} className="relative">
      <div
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
          setIsUsingContextMenu &&
            setIsUsingContextMenu((isUsingContextMenu) => !isUsingContextMenu);
        }}
      >
        {children}
      </div>

      {isOpen && (
        <ul
          className={`absolute z-40 shadow-md dark:shadow-gray-50/10 ${position === "right" ? "left-[150%]" : ""} ${position === "left" ? "right-[130%]" : ""} ${position === "center" ? "right-0 top-[115%]" : "bottom-0"} min-w-48 rounded bg-white text-sm dark:bg-black`}
        >
          {options.map((opt, index) => (
            <li
              key={index}
              onClick={() => {
                opt.handler();
                opt.closeAfterClick && setIsOpen(false);
              }}
              className={`${opt.child && "relative"} group/contextli flex cursor-pointer items-center justify-start gap-2 px-3 py-2 text-left text-sm text-black first:rounded-t last:rounded-b hover:bg-blue-50 dark:text-white dark:hover:bg-white/10 [&_svg]:min-h-4 [&_svg]:min-w-4 [&_svg]:text-black [&_svg]:duration-100 dark:[&_svg]:text-white`}
            >
              {opt.icon}
              {opt.title}
              {opt.child}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContextMenu;
