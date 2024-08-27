import { useParams } from "react-router-dom";
import useCategorysPlaylists from "../features/playlists/hooks/useCategorysPlaylists";
import Spinner from "../ui/Spinner";
import useMainContext from "../ui/layout/Main/useMainContext";
import Page from "../ui/layout/page/Page";
import PageBody from "../ui/layout/page/PageBody";
import NavTitle from "../ui/layout/topNav/NavTitle";
import TopNav from "../ui/layout/topNav/TopNav";
import PageHeaderWrapper from "../ui/layout/page/PageHeaderWrapper";
import PageTitle from "../ui/layout/page/PageTitle";
import ListContainer from "../ui/ListContainer";
import useCategory from "../features/searchAndDiscovery/hooks/useCategory";
import IconLogo from "../ui/layout/topNav/IconLogo";

function CategoryPage() {
  const { isMainScrolled } = useMainContext();
  const { id } = useParams();
  const { isLoading: isLoadingCategory, category } = useCategory(id);
  const { isLoading: isLoadingCategorysPlaylists, categorysPlaylists } =
    useCategorysPlaylists(id);

  return (
    <Page>
      <TopNav>
        {isMainScrolled && (
          <NavTitle noPlayButton>
            <IconLogo noTitle />
            {category?.name}
          </NavTitle>
        )}
      </TopNav>
      {isLoadingCategory || isLoadingCategorysPlaylists ? (
        <div className="grid h-full place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <PageHeaderWrapper
            short
            className="text-3xl font-bold first-letter:uppercase"
          >
            <PageTitle>{category?.name} Category</PageTitle>
          </PageHeaderWrapper>
          <PageBody>
            <ListContainer
              items={categorysPlaylists}
              isLoading={isLoadingCategorysPlaylists}
              noTitle
              all={true}
            />
          </PageBody>
        </>
      )}
    </Page>
  );
}

export default CategoryPage;
