function PageBody({ children, className }) {
  return <div className={`space-y-10 pt-8 ${className}`}>{children}</div>;
}

export default PageBody;
