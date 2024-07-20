import { Outlet } from "react-router-dom";
import SearchBox from "../features/searchAndDiscovery/SearchBox";
import TopNav from "../ui/TopNav";

function SearchPage() {
  return (
    <div>
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
