import { Outlet } from "react-router-dom";
import TopNav from "../ui/TopNav";

function SectionPage({ children }) {
  return (
    <div>
      <TopNav />
      {children}
      <Outlet />
    </div>
  );
}

export default SectionPage;
