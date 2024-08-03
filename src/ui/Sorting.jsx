import { useState } from "react";
import { TbCheck, TbList } from "react-icons/tb";
import { useSelector } from "react-redux";
import useOutsideClick from "../hooks/useOutsideClick";

function Sorting({ options, handler }) {
  const { sortByIndex } = useSelector((store) => store.library);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div
      ref={ref}
      className="group relative flex cursor-pointer items-center gap-1 text-sm text-black dark:text-white"
    >
      {options[sortByIndex]}
      <TbList
        className={`${isOpen ? "text-blue-600" : "text-black group-hover:text-blue-600 dark:text-white"} min-h-5 min-w-5 rounded-full duration-100`}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      />
      {isOpen && (
        <ul className="absolute right-0 top-[150%] min-w-40 rounded bg-white py-2 text-sm dark:bg-black">
          <li className="px-3 py-1 text-sm font-semibold text-black dark:text-white">
            Sort by
          </li>
          {options.map((opt, index) => (
            <li
              className={`${index === sortByIndex ? "flex items-center justify-between gap-1 font-medium text-blue-600" : "text-black hover:bg-blue-50 dark:text-white dark:hover:bg-white/10"} px-3 py-2 text-sm`}
              key={index}
              onClick={() => handler(index)}
            >
              {opt}
              {index === sortByIndex && (
                <TbCheck className="text-lg duration-100" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sorting;
