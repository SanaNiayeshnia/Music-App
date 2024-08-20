import { createContext, useState } from "react";

export const MainContext = createContext();
function MainContextProvider({ children }) {
  const [isMainScrolled, setIsMainScrolled] = useState(false);
  const [mainRef, setMainRef] = useState(true); //I need to use context-api to save the main ref, because i couldn't save it in global slice of redux
  function scrollMainToTop() {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }

  return (
    <MainContext.Provider
      value={{
        isMainScrolled,
        setIsMainScrolled,
        setMainRef,
        scrollMainToTop,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
