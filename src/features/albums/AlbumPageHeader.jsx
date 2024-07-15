import { useSelector } from "react-redux";
import Cover from "../../ui/Cover";
import PageHeader from "../../ui/PageHeader";
import PageTitle from "../../ui/PageTitle";

function AlbumPageHeader() {
  return (
    <PageHeader background="/header.png">
      <div className="flex items-center gap-3 xl:gap-5">
        <Cover src="/test.png" alt="" />
        <div className="space-y-4">
          <p className="text-sm text-gray-900 dark:text-white">Album</p>
          <PageTitle>Superache</PageTitle>
          <div className="flex items-center gap-1">
            <img
              src="/test.png"
              alt=""
              className="h-6 w-6 rounded-full shadow-sm"
            />
            <p className="text-sm text-gray-900 dark:text-white">
              <span className="font-semibold text-gray-900 dark:text-white">
                Conan Gray
              </span>{" "}
              • 2022 • 12 songs, 40 min 22 sec
            </p>
          </div>
        </div>
      </div>
    </PageHeader>
  );
}

export default AlbumPageHeader;
