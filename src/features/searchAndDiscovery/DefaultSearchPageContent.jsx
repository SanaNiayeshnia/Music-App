import PageBody from "../../ui/layout/page/PageBody";
import CategoryList from "./CategoryList";

function DefaultSearchPageContent() {
  return (
    <PageBody noPadding>
      <CategoryList all />
    </PageBody>
  );
}

export default DefaultSearchPageContent;
