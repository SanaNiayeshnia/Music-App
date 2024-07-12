function ListContainer({ children, className }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export default ListContainer;
