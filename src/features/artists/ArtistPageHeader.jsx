import { VscVerifiedFilled } from "react-icons/vsc";
import PageTitle from "../../ui/PageTitle";
import PageHeader from "../../ui/PageHeader";

function ArtistPageHeader() {
  return (
    <PageHeader background="/header.png">
      <p className="flex items-center gap-1 text-sm text-gray-900 dark:text-white">
        <VscVerifiedFilled className="min-h-6 min-w-6 text-blue-600" />
        Verified Artist
      </p>
      <PageTitle>Conan Gray</PageTitle>

      <p className="text-gray-900 dark:text-white">
        22,223,000 monthly listeners
      </p>
    </PageHeader>
  );
}

export default ArtistPageHeader;
