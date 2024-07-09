function ListItem({ type }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/test.png"
        alt=""
        className={`h-12 w-12 ${type === "artist" ? "rounded-full" : "rounded-sm"}`}
      />
      <div className="flex flex-col justify-center gap-1 text-sm">
        <p className="text-gray-900 dark:text-white">Halsey</p>
        <p className="text-gray-600 dark:text-gray-300">Artist</p>
      </div>
    </div>
  );
}

export default ListItem;
