import { createContext, useState } from "react";
export const LibraryContext = createContext();

function LibraryContextProvider({ children }) {
  const [libraryRef, setLibraryRef] = useState(null);

  function scrollLibraryToTop() {
    libraryRef.current.scrollTo(0, 0);
  }
  return (
    <LibraryContext.Provider value={{ setLibraryRef, scrollLibraryToTop }}>
      {children}
    </LibraryContext.Provider>
  );
}

export default LibraryContextProvider;
