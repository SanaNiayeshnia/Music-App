function Title({ children, className }) {
  return (
    <p
      className={`my-5 text-2xl font-bold text-gray-900 dark:text-white ${className}`}
    >
      {children}
    </p>
  );
}

export default Title;
