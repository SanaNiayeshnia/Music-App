import { TbMoodSad } from "react-icons/tb";
import Page from "../ui/layout/page/Page";
import TopNav from "../ui/layout/topNav/TopNav";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <Page>
      <TopNav />
      <div className="grid h-full place-items-center font-semibold">
        <div className="flex flex-col items-center gap-3">
          <p className="flex items-center gap-1 text-xl text-black dark:text-white">
            Page Not Found!!
            <TbMoodSad className="h-10 w-10 text-black duration-100 dark:text-white" />
          </p>
          <NavLink
            className="rounded-full bg-blue-600 px-3 py-2 text-lg text-white"
            to="/"
          >
            Go Home
          </NavLink>
        </div>
      </div>
    </Page>
  );
}

export default PageNotFound;
