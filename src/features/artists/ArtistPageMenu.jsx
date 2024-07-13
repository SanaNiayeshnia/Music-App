import { RiMoreFill, RiPlayFill } from "react-icons/ri";
import Button from "../../ui/Button";

function ArtistPageMenu() {
  return (
    <div className="flex items-center gap-5">
      <div className="rounded-full bg-blue-600 hover:scale-105">
        <RiPlayFill className="min-h-14 min-w-14 cursor-pointer p-2 text-white" />
      </div>

      <Button>Follow</Button>
      <RiMoreFill className="min-h-6 min-w-6 cursor-pointer text-gray-900 hover:scale-110 dark:text-white" />
    </div>
  );
}

export default ArtistPageMenu;
