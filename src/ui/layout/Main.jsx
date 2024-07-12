import TopNav from "../TopNav";

function Main({ children }) {
  return (
    <div className="relative w-full rounded-md bg-white px-4 py-3 shadow-md dark:bg-glass-100">
      <TopNav />
      {children}
    </div>
  );
}

export default Main;
