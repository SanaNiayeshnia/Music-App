import LibraryBody from "../features/library/Library body/LibraryBody";
import IconLogo from "../ui/layout/topNav/IconLogo";
import NavTitle from "../ui/layout/topNav/NavTitle";
import Page from "../ui/layout/page/Page";
import PageBody from "../ui/layout/page/PageBody";
import TopNav from "../ui/layout/topNav/TopNav";
import useMainContext from "../ui/layout/main/useMainContext";

function LibraryPage() {
  const { isMainScrolled } = useMainContext();

  return (
    <Page>
      <TopNav>
        {isMainScrolled && (
          <NavTitle noPlayButton>
            <IconLogo noTitle />
            Library
          </NavTitle>
        )}
      </TopNav>
      <PageBody noPadding>
        <LibraryBody />
      </PageBody>
    </Page>
  );
}

export default LibraryPage;
