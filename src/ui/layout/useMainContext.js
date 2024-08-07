import { createContext, useContext } from "react";

export const MainContext = createContext();
function useMainContext() {
  const state = useContext(MainContext);
  return state;
}

export default useMainContext;
