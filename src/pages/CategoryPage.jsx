import { useParams } from "react-router-dom";
import useCategoriesPlaylists from "../features/playlists/hooks/useCategoriesPlaylists";
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

function CategoryPage() {
  const { isMainScrolled } = useMainContext();
  const { id } = useParams();
  const { isLoading: isLoadingCategory, category } = useCategory(id);
  const { isLoading: isLoadingCategorysPlaylists, categoriesPlaylists } =
    useCategoriesPlaylists(id);
  console.log(categoriesPlaylists);
  return (
    <Page>
      <TopNav>{isMainScrolled && <NavTitle></NavTitle>}</TopNav>
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
              items={categoriesPlaylists}
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
