function ShowAll({ children, className }) {
  return (
    <p
      className={`mt-5 cursor-pointer text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white ${className}`}
    >
      {children}
    </p>
  );
}

export default ShowAll;
