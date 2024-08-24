import { useSelector } from "react-redux";

function PageBody({ children, noPadding, noSpace, className }) {
  const { isSmall } = useSelector((store) => store.global);
  return (
    <div
      className={`${isSmall && "pb-[160px]"} ${!noPadding && "pt-8"} ${!noSpace && "space-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default PageBody;
