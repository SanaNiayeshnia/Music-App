function Button({ children }) {
  return (
    <button className="rounded-2xl border border-blue-600 px-3 py-1 text-sm font-semibold text-blue-600 outline-blue-600 duration-0 hover:outline hover:outline-1 dark:text-white">
      {children}
    </button>
  );
}

export default Button;
