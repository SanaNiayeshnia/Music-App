import { useReducer } from "react";
import { playerContext } from "./hooks/usePlayerContext";

function reducer(state, action) {
  switch (action.type) {
    case "setPlayer":
      return { ...state, player: action.payload };
    case "setDeviceId":
      return { ...state, deviceId: action.payload };
    case "changePlayerState": {
      return {
        ...state,
        playerState: action.payload,
        currentTrack: action.payload.track_window?.current_track,
      };
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
    currentTrack: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { ...state, dispatch };
  return (
    <playerContext.Provider value={value}>{children}</playerContext.Provider>
  );
}

export default PlayerContextProvider;
