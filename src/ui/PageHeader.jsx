import { useSelector } from "react-redux";
import Cover from "./Cover";
import HeaderType from "./HeaderType";
import PageHeaderWrapper from "./PageHeaderWrapper";
import PageTitle from "./PageTitle";

function PageHeader({ background, type, title, cover, artistPic, something }) {
  return (
    <PageHeaderWrapper background={background}>
      <div className="flex items-center gap-4 xl:gap-5">
        <Cover src={cover} alt="" />
        <div className={`max-w-60 space-y-3 lg:max-w-full lg:space-y-4`}>
          <HeaderType>{type}</HeaderType>
          <PageTitle>{title}</PageTitle>
          <div className="flex items-center gap-1">
            <img
              src={artistPic}
              alt=""
              className="h-6 w-6 rounded-full shadow"
            />
            {something}
          </div>
        </div>
      </div>
    </PageHeaderWrapper>
  );
}

export default PageHeader;
