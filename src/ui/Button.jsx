function Button({ children, onClick, disabled = false, active }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${!disabled && "cursor-pointer"} ${active ? "bg-blue-600 text-white" : "bg-white/50 text-blue-600 dark:bg-black/50 dark:text-white"} rounded-2xl border border-blue-600 px-3 py-1 text-sm font-semibold shadow outline-blue-600 transition-all duration-0 hover:scale-105 hover:ring-1 hover:ring-blue-600`}
    >
      {children}
    </button>
  );
}

export default Button;
