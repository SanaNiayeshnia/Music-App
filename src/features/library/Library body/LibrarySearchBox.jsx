import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import { TbX } from "react-icons/tb";
import { RiSearch2Line } from "react-icons/ri";
import { setSearchQuery } from "../librarySlice";

function LibrarySearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));
  const { searchQuery, currentFilter } = useSelector((store) => store.library);
  const { isSmall } = useSelector((store) => store.global);
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    //set focus on the search input when the component mounts
    isOpen && !isSmall && inputRef.current.focus();
  }, [isOpen, isSmall]);

  return (
    <div
      ref={ref}
      className={`${isOpen && "bg-white/50 shadow dark:bg-black/50"} flex items-center gap-1 rounded-md py-1`}
    >
      <RiSearch2Line
        onClick={() => setIsOpen(true)}
        className={`min-h-7 min-w-7 rounded-full p-1 text-black duration-100 dark:text-white ${!isOpen && "cursor-pointer hover:bg-white/50 hover:shadow dark:hover:bg-black/50"}`}
      />
      <div
        className={`${isOpen && "animation-open-searchbox w-48 opacity-100 md:w-36"} ${!isOpen && "animation-close-searchbox cursor-default"} mr-2 flex items-center gap-2 opacity-0`}
      >
        <input
          type="text"
          placeholder={`search in ${currentFilter ? currentFilter + "s" : "your library"}`}
          ref={inputRef}
          autoFocus
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className={`w-full bg-transparent text-sm placeholder:text-xs placeholder:text-gray-600 focus:border-0 focus:outline-0 dark:placeholder:text-white/50`}
        />

        {searchQuery !== "" && (
          <TbX
            className="min-h-5 min-w-5 cursor-pointer"
            onClick={() => {
              dispatch(setSearchQuery(""));
            }}
          />
        )}
      </div>
    </div>
  );
}

export default LibrarySearchBox;
