import { useReducer } from "react";
import { playerContext } from "./usePlayerContext";

function reducer(state, action) {
  switch (action.type) {
    case "setPlayer":
      return { ...state, player: action.payload };
    case "setDeviceId":
      return { ...state, deviceId: action.payload };
    case "changePlayerState": {
      const { trackInfo, paused, position, duration } = action.payload;
      return { ...state, trackInfo, paused, position, duration };
    }
    default:
      return state;
  }
}

function PlayerContextProvider({ children }) {
  const initialState = {
    player: {},
    deviceId: null,
    trackInfo: {},
    paused: true,
    position: 0,
    duration: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <playerContext.Provider value={value}>{children}</playerContext.Provider>
  );
}

export default PlayerContextProvider;
