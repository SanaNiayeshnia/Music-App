import DarkModeToggler from "./DarkModeToggler";

function TopNav() {
  return (
    <div className="absolute right-2 top-0 flex items-center gap-2">
      <DarkModeToggler />

      <img src="./test.png" alt="" className="h-8 w-8 rounded-full" />
    </div>
  );
}

export default TopNav;
