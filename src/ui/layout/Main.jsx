import TopNav from "../TopNav";

function Main({ children }) {
  return (
    <div className="w-full overflow-hidden rounded-md bg-white px-2 py-3 shadow-md dark:bg-glass-100">
      <TopNav />
      {children}
    </div>
  );
}

export default Main;
