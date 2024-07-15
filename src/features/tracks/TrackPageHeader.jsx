import Cover from "../../ui/Cover";
import HeaderType from "../../ui/HeaderType";
import PageHeader from "../../ui/PageHeader";
import PageTitle from "../../ui/PageTitle";

function TrackPageHeader() {
  return (
    <PageHeader background="/header.png">
      <div className="flex items-center gap-3 xl:gap-5">
        <Cover src="/test.png" alt="" />
        <div className="space-y-4">
          <HeaderType>Song</HeaderType>
          <PageTitle>People Watching</PageTitle>
          <div className="flex items-center gap-1">
            <img
              src="/test.png"
              alt=""
              className="h-6 w-6 rounded-full shadow-sm"
            />
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              <span className="font-semibold text-gray-900 dark:text-white">
                Superache
              </span>{" "}
              • 2022 • 1:32 • 412,334,745
            </p>
          </div>
        </div>
      </div>
    </PageHeader>
  );
}

export default TrackPageHeader;
