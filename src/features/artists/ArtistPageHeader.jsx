import { VscVerifiedFilled } from "react-icons/vsc";

function ArtistPageHeader() {
  return (
    <div className="relative h-[17rem] w-full bg-[url(/header.png)] bg-cover bg-fixed bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-t from-white from-[1%] brightness-150 filter dark:from-black dark:brightness-50"></div>
      <div className="absolute inset-0 space-y-5 px-5 pt-[70px]">
        <p className="flex items-center gap-1 text-gray-900 dark:text-white">
          <VscVerifiedFilled className="min-h-6 min-w-6 text-blue-600" />
          verified artist
        </p>
        <p className="text-7xl font-bold text-gray-900 dark:text-white">
          Conan Gray
        </p>
        <p className="text-gray-900 dark:text-white">
          22,223,000 monthly listeners
        </p>
      </div>
    </div>
  );
}

export default ArtistPageHeader;
