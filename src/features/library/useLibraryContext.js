import { useContext } from "react";
import { LibraryContext } from "./LibraryContextProvider";

function useLibraryContext() {
  const state = useContext(LibraryContext);
  return state;
}

export default useLibraryContext;
