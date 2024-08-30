import PageHeaderWrapper from "./PageHeaderWrapper";
import PageTitle from "./PageTitle";

function ShortPageHeader({ title }) {
  return (
    <PageHeaderWrapper
      short
      className="text-3xl font-bold first-letter:uppercase"
    >
      <PageTitle>{title}</PageTitle>
    </PageHeaderWrapper>
  );
}

export default ShortPageHeader;
