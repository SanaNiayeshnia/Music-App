import PageTitle from "../../ui/PageTitle";
import PageHeaderWrapper from "../../ui/PageHeaderWrapper";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

function ArtistPageHeader() {
  return (
    <PageHeaderWrapper background="/header.png">
      <p className="flex items-center gap-1 text-sm text-black dark:text-white">
        <TbRosetteDiscountCheckFilled className="min-h-6 min-w-6 text-blue-600" />
        Verified Artist
      </p>
      <PageTitle>Conan Gray</PageTitle>

      <p className="text-black dark:text-white">22,223,000 monthly listeners</p>
    </PageHeaderWrapper>
  );
}

export default ArtistPageHeader;
