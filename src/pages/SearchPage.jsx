import { Outlet } from "react-router-dom";
import SearchBox from "../features/searchAndDiscovery/SearchBox";
import TopNav from "../ui/TopNav";

function SearchPage() {
  return (
    <div className="px-5 pb-5 pt-[85px]">
      <TopNav>
        <SearchBox />
      </TopNav>
      <div className="space-y-10">
        <Outlet />
      </div>
    </div>
  );
}

export default SearchPage;
