import { useSelector } from "react-redux";

function PageBody({ children }) {
  const { isSmall } = useSelector((store) => store.global);
  return (
    <div className={`${isSmall && "pb-[75px]"} space-y-8 pt-8`}>{children}</div>
  );
}

export default PageBody;
