function PageBody({ children }) {
  return (
    <div className="space-y-10 bg-gradient-to-b from-white from-[0.5%] px-5 dark:from-black">
      {children}
    </div>
  );
}

export default PageBody;
