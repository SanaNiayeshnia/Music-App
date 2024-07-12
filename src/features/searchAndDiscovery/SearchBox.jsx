import { useEffect, useRef, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useSelector } from "react-redux";

function SearchBox() {
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);
  const [query, setQuery] = useState("");
  const ref = useRef();
  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <div
      className={`flex items-center gap-2 overflow-hidden rounded-full border-2 border-transparent bg-blue-50 px-3 py-3 focus-within:border-blue-600 dark:bg-glass-100`}
    >
      <RiSearch2Line className="min-h-5 min-w-5 text-gray-900 dark:text-white" />
      <input
        ref={ref}
        type="text"
        autoFocus
        placeholder="What do you want to play?"
        className={`${isPlayingTrackbarOpen ? "md:w-28 lg:w-36" : "md:w-40 lg:w-64"} bg-transparent text-gray-900 placeholder:text-xs placeholder:text-gray-600 focus:outline-0 lg:placeholder:text-sm xl:w-72 dark:text-white dark:placeholder:text-glass-300`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
