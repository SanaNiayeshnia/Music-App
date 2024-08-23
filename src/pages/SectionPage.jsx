import { Outlet } from "react-router-dom";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";

function SectionPage({ children }) {
  return (
    <PageBody noPadding noSpace>
      <TopNav />
      {children}
      <Outlet />
    </PageBody>
  );
}

export default SectionPage;
