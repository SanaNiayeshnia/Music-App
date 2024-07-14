import PlayButton from "../../ui/PlayButton";

function ArtistNav({ children }) {
  return (
    <div className="flex items-center gap-2">
      <PlayButton className="min-h-12 min-w-12" />
      <p className="text-xl font-semibold text-gray-900 dark:text-white">
        {children}
      </p>
    </div>
  );
}

export default ArtistNav;
