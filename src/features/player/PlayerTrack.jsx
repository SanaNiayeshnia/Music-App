function PlayerTrack({ hoverable }) {
  return (
    <div
      className={`${hoverable && "cursor-pointer rounded-md p-2 hover:bg-blue-50 dark:hover:bg-glass-100"} flex items-center gap-4`}
    >
      <img className="h-14 w-14 rounded border-2" src="/test.png" alt="" />
      <div className="flex flex-col justify-end gap-0.5 leading-4">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          Houdini
        </p>
        <p className="text-[0.8rem] text-gray-600 dark:text-gray-300">
          Dua lipa
        </p>
      </div>
    </div>
  );
}

export default PlayerTrack;
