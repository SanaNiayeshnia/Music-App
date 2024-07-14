import { RiMoreFill } from "react-icons/ri";
import Button from "../../ui/Button";
import PlayButton from "../../ui/PlayButton";

function ArtistPageMenu() {
  return (
    <div className="flex items-center gap-5">
      <PlayButton className="min-h-14 min-w-14" />

      <Button>Follow</Button>
      <RiMoreFill className="min-h-6 min-w-6 cursor-pointer text-gray-900 hover:scale-110 dark:text-white" />
    </div>
  );
}

export default ArtistPageMenu;
