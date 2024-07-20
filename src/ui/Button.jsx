function Button({ children }) {
  return (
    <button className="rounded-2xl border border-blue-600 bg-white/50 px-3 py-1 text-sm font-semibold text-blue-600 shadow outline-blue-600 duration-0 hover:scale-105 hover:ring-1 hover:ring-blue-600 dark:bg-black/40 dark:text-white">
      {children}
    </button>
  );
}

export default Button;
