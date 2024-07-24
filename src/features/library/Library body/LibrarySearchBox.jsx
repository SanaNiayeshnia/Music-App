import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { useSelector } from "react-redux";
import { TbX } from "react-icons/tb";
import { RiSearch2Line } from "react-icons/ri";

function LibrarySearchBox() {
  const { isMedium } = useSelector((store) => store.global);
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
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
      className={`${isOpen && "bg-white/50 shadow dark:bg-black/50"} ${!isPlayingTrackbarOpen && isMedium && "max-w-24 lg:max-w-52"} flex items-center gap-1 rounded-md py-1`}
    >
      <RiSearch2Line
        onClick={() => setIsOpen(true)}
        className={`min-h-7 min-w-7 rounded-full p-1 text-black duration-100 dark:text-white ${!isOpen && "cursor-pointer hover:bg-white/50 hover:shadow dark:hover:bg-black/50"}`}
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
          className={`w-full bg-transparent text-sm placeholder:text-xs placeholder:text-gray-600 focus:border-0 focus:outline-0 dark:placeholder:text-white/50`}
        />

        {searchQuery !== "" && (
          <TbX
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
