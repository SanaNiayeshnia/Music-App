import { useContext } from "react";
import { MainContext } from "./MainContextProvider";

function useMainContext() {
  const state = useContext(MainContext);
  return state;
}

export default useMainContext;
