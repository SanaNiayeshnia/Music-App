import { Outlet } from "react-router-dom";
import TopNav from "../ui/layout/topNav/TopNav";
import PageBody from "../ui/layout/page/PageBody";
import IconLogo from "../ui/layout/topNav/IconLogo";
import useMainContext from "../ui/layout/Main/useMainContext";
import Page from "../ui/layout/page/Page";

function SectionPage({ children }) {
  const { isMainScrolled } = useMainContext();
  return (
    <Page>
      <PageBody noPadding noSpace>
        <TopNav>{isMainScrolled && <IconLogo noTitle />}</TopNav>
        {children}
        <Outlet />
      </PageBody>
    </Page>
  );
}

export default SectionPage;
