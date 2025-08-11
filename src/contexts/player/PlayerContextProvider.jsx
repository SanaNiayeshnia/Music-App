import { useReducer } from "react";
import { playerContext } from "./usePlayerContext";

function reducer(state, action) {
  switch (action.type) {
    case "setPlayer":
      return { ...state, player: action.payload };
    case "setDeviceId":
      return { ...state, deviceId: action.payload };
    case "changePlayerState": {
      return { ...state, playerState: action.payload };
    }
    default:
      return state;
  }
}

function PlayerContextProvider({ children }) {
  const initialState = {
    player: {},
    deviceId: null,
    playerState: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <playerContext.Provider value={value}>{children}</playerContext.Provider>
  );
}

export default PlayerContextProvider;
