import { Outlet } from "react-router-dom";
import TopNav from "../ui/TopNav";

function SectionPage() {
  return (
    <div>
      <TopNav />
      <Outlet />
    </div>
  );
}

export default SectionPage;
