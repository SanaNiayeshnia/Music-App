import { Outlet } from "react-router-dom";
import TopNav from "../ui/TopNav";
import PageBody from "../ui/PageBody";
import IconLogo from "../ui/IconLogo";
import useMainContext from "../ui/layout/useMainContext";

function SectionPage({ children }) {
  const { isMainScrolled } = useMainContext();
  return (
    <PageBody noPadding noSpace>
      <TopNav>{isMainScrolled && <IconLogo noTitle />}</TopNav>
      {children}
      <Outlet />
    </PageBody>
  );
}

export default SectionPage;
