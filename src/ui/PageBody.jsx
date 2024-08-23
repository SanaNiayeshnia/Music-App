import { useSelector } from "react-redux";

function PageBody({ children, noPadding, noSpace }) {
  const { isSmall } = useSelector((store) => store.global);
  return (
    <div
      className={`${isSmall && "pb-[75px]"} ${!noPadding && "pt-8"} ${!noSpace && "space-y-8"} `}
    >
      {children}
    </div>
  );
}

export default PageBody;
