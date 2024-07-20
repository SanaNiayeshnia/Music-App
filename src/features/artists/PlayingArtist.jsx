import Button from "../../ui/Button";

function PlayingArtist() {
  return (
    <div className="rounded-md bg-white/50 shadow dark:bg-black/40">
      <div className="relative overflow-hidden">
        <img src="/test.png" alt="" className="h-40 w-full rounded-t-md" />
        <p className="absolute left-4 top-4 text-sm font-semibold text-white">
          About the artist
        </p>
      </div>
      <div className="space-y-3 px-5 py-4">
        <p className="font-semibold text-black dark:text-white">Dua Lipa</p>
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-700 dark:text-gray-300">
            5,400,000 monthly listeners
          </p>
          <Button>Follow</Button>
        </div>
        <p className="text-justify text-sm text-gray-700 dark:text-gray-300">
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
