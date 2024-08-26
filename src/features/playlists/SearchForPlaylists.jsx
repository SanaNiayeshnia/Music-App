import { RiSearch2Line } from "react-icons/ri";
import { TbX } from "react-icons/tb";
import { useSelector } from "react-redux";

function SearchForPlaylists({ searchQuery, setSearchQuery }) {
  const { isSmall } = useSelector((store) => store.global);
  return (
    <div
      className={`flex items-center gap-1 rounded-md bg-blue-50 py-1 shadow dark:bg-white/10`}
    >
      <RiSearch2Line
        className={`h-6 w-6 rounded-full p-1 text-black duration-100 dark:text-white`}
      />
      <div className={`flex w-48 items-center justify-between gap-2`}>
        <input
          type="text"
          placeholder="search in your library"
          autoFocus={isSmall ? false : true}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full bg-transparent text-sm placeholder:text-xs placeholder:text-gray-600 focus:border-0 focus:outline-0 dark:placeholder:text-white/50`}
        />

        {searchQuery !== "" && (
          <TbX
            className="mr-1 min-h-5 min-w-5 cursor-pointer"
            onClick={() => {
              setSearchQuery("");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default SearchForPlaylists;
