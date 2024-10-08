import { useState } from "react";
import { TbCheck, TbList } from "react-icons/tb";
import { useSelector } from "react-redux";
import useOutsideClick from "../hooks/useOutsideClick";

function Sorting({ options, handler }) {
  const { sortBy } = useSelector((store) => store.library);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div
      ref={ref}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
      className="group relative flex cursor-pointer items-center gap-1 text-sm text-black dark:text-white"
    >
      {sortBy}
      <TbList
        className={`${isOpen ? "text-blue-600" : "text-black group-hover:text-blue-600 dark:text-white"} min-h-6 min-w-6 rounded-full duration-100 md:min-h-5 md:min-w-5`}
      />
      {isOpen && (
        <ul className="absolute right-0 top-[150%] min-w-40 rounded bg-white py-2 text-sm shadow-md dark:bg-black dark:shadow-gray-50/10">
          <li className="px-3 py-1 text-sm font-semibold text-black dark:text-white">
            Sort by
          </li>
          {options.map((opt, index) => (
            <li
              className={`${opt === sortBy ? "flex items-center justify-between gap-1 font-medium text-blue-600" : "text-black hover:bg-blue-50 dark:text-white dark:hover:bg-white/10"} px-3 py-2 text-sm`}
              key={index}
              onClick={() => handler(opt)}
            >
              {opt}
              {opt === sortBy && <TbCheck className="text-lg duration-100" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sorting;
