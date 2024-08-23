import { TbMoodSad } from "react-icons/tb";
import Page from "../ui/Page";
import TopNav from "../ui/TopNav";

function PageNotFound() {
  return (
    <Page>
      <TopNav />
      <div className="grid h-[calc(100%-52px)] place-items-center text-xl font-semibold">
        <p className="flex items-center gap-1 text-black dark:text-white">
          Page not found!!
          <TbMoodSad className="h-10 w-10 text-black duration-100 dark:text-white" />
        </p>
      </div>
    </Page>
  );
}

export default PageNotFound;
