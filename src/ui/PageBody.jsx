function PageBody({ children }) {
  return (
    <div className="space-y-10 bg-gradient-to-b from-white/40 from-[0.5%] px-5 pt-8 dark:from-black/40">
      {children}
    </div>
  );
}

export default PageBody;
