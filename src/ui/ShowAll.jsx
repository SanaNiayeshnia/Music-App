function ShowAll({ children }) {
  return (
    <p className="mt-5 cursor-pointer px-3 text-sm font-semibold text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
      {children}
    </p>
  );
}

export default ShowAll;
