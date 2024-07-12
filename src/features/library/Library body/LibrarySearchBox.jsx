import { useEffect, useRef, useState } from "react";
import { RiCloseFill, RiSearch2Line } from "react-icons/ri";
import useOutsideClick from "../../../hooks/useOutsideClick";

function LibrarySearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    isOpen && inputRef.current.focus();
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className={`${isOpen && "bg-blue-50 dark:bg-glass-100"} flex items-center gap-1 rounded-md py-1`}
    >
      <RiSearch2Line
        onClick={() => setIsOpen(true)}
        className={`min-h-7 min-w-7 rounded-full p-1 text-gray-900 duration-100 dark:text-white ${!isOpen && "cursor-pointer hover:bg-blue-50 dark:hover:bg-glass-100"}`}
      />
      <div
        className={`${isOpen && "animation-open-searchbox w-36 opacity-100"} ${!isOpen && "animation-close-searchbox cursor-default"} mr-2 flex items-center gap-2 opacity-0`}
      >
        <input
          type="text"
          placeholder="search in your library"
          ref={inputRef}
          autoFocus
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full bg-transparent text-sm placeholder:text-xs placeholder:text-gray-600 focus:border-0 focus:outline-0 dark:placeholder:text-glass-300`}
        />

        {searchQuery !== "" && (
          <RiCloseFill
            className="min-h-5 min-w-5 cursor-pointer"
            onClick={() => {
              setSearchQuery("");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default LibrarySearchBox;
