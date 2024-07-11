import { useSelector } from "react-redux";

function Main({ children }) {
  return (
    <div className="w-full rounded-md bg-white px-4 py-5 shadow-md dark:bg-glass-100">
      {children}
    </div>
  );
}

export default Main;
