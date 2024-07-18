function PlayerTrack() {
  return (
    <div className="flex items-center gap-4">
      <img className="h-14 w-14 rounded" src="/test.png" alt="" />
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
