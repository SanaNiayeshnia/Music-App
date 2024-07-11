function PlayingArtist() {
  return (
    <div className="rounded-md bg-blue-50 dark:bg-glass-100">
      <div className="relative overflow-hidden">
        <img src="/test.png" alt="" className="h-40 w-full rounded-t-md" />
        <p className="absolute left-4 top-4 text-sm font-semibold text-white">
          About the artist
        </p>
      </div>
      <div className="space-y-3 px-5 py-4">
        <p className="font-semibold text-gray-900 dark:text-white">Dua Lipa</p>
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-600 dark:text-gray-300">
            5,400,000 monthly listeners
          </p>
          <button className="rounded-2xl border border-blue-600 px-3 py-1 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white dark:text-white">
            Follow
          </button>
        </div>
        <p className="text-justify text-sm text-gray-600 dark:text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          veritatis ipsam assumenda placeat iste praesentium, nemo ullam illo
          cupiditate temporibus amet eum sit fugiat ex architecto quidem earum?
          Vitae, iste!
        </p>
      </div>
    </div>
  );
}

export default PlayingArtist;
