import LibraryBody from "../features/library/Library body/LibraryBody";
import IconLogo from "../ui/IconLogo";
import NavTitle from "../ui/NavTitle";
import Page from "../ui/Page";
import PageBody from "../ui/PageBody";
import TopNav from "../ui/TopNav";
import useMainContext from "../ui/layout/useMainContext";

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
