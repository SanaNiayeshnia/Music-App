import { useEffect, useRef, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function SearchBox() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const ref = useRef();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  function changeQueryhandler(e) {
    searchParams.set("q", e.target.value.toLowerCase());
    setSearchParams(searchParams);
  }

  return (
    <div
      className={`flex items-center gap-2 overflow-hidden rounded-full border-2 border-blue-600 bg-white/50 px-3 py-3 shadow-md focus-within:ring-2 focus-within:ring-blue-600/40 dark:bg-black/50`}
    >
      <RiSearch2Line className="min-h-5 min-w-5 text-black dark:text-white" />
      <input
        ref={ref}
        type="text"
        autoFocus
        placeholder="What do you want to play?"
        className={`${isPlayingTrackbarOpen ? "md:w-28 lg:w-36" : "md:w-40 lg:w-64"} bg-transparent text-black placeholder:text-xs placeholder:text-gray-700 focus:outline-0 lg:placeholder:text-sm xl:w-72 dark:text-white dark:placeholder:text-white/50`}
        onKeyUp={(e) => changeQueryhandler(e)}
      />
    </div>
  );
}

export default SearchBox;
