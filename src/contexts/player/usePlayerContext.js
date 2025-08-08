import { createContext, useContext } from "react";

export const playerContext = createContext();

export function usePlayerContext() {
  const state = useContext(playerContext);
  return state;
}
