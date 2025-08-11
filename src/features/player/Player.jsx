import { useSelector } from "react-redux";
import PlayerTrack from "../tracks/PlayerTrack";
import PlaybackController from "./playbackController/PlaybackController";
import PlayerMenu from "./playerMenu/PlayerMenu";
import { useEffect } from "react";
import { APP_NAME } from "../../utilities/constants";
import { usePlayerContext } from "../../contexts/player/usePlayerContext";
import { transferPlaybackToThisDevice } from "../../services/playerApi";
import { setIsFullScreenPlayingTrack } from "./PlaybackSlice";

function Player() {
  const { accessToken } = useSelector((store) => store.authentication);
  const { dispatch } = usePlayerContext();

  useEffect(() => {
    let intervalId;
    const loadSpotifyPlayer = () => {
      if (window.Spotify) {
        const player = new window.Spotify.Player({
          name: APP_NAME,
          getOAuthToken: (cb) => cb(accessToken),
          volume: 0.5,
        });

        dispatch({ type: "setPlayer", payload: player });

        player.addListener("ready", async ({ device_id }) => {
          console.log("Ready with Device ID:", device_id);
          dispatch({ type: "setDeviceId", payload: device_id });
          await transferPlaybackToThisDevice({
            accessToken,
            deviceId: device_id,
            player,
          });

          intervalId = setInterval(async () => {
            const state = await player.getCurrentState();
            if (state) {
              dispatch({
                type: "changePlayerState",
                payload: state,
              });
            }
          }, 1000);
        });

        player.addListener("not_ready", ({ device_id }) => {
          console.log("Device ID has gone offline", device_id);
        });

        player.addListener("initialization_error", ({ message }) => {
          console.error(message);
        });

        player.addListener("authentication_error", ({ message }) => {
          console.error(message);
        });

        player.addListener("account_error", ({ message }) => {
          console.error(message);
        });

        player.addListener("player_state_changed", (state) => {
          if (!state) return;
          console.log("state", state);

          dispatch({
            type: "changePlayerState",
            payload: state,
          });
        });

        player.connect();
      }
    };

    if (!window.Spotify) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      script.onload = () => {
        console.log("SDK Loaded");
        loadSpotifyPlayer();
      };
      document.body.appendChild(script);
    } else {
      loadSpotifyPlayer();
    }

    () => clearInterval(intervalId);
  }, [accessToken, dispatch]);

  return (
    <>
      <div
        className="absolute bottom-20 mb-2 flex w-full cursor-pointer justify-center px-3 md:hidden"
        onClick={() => dispatch(setIsFullScreenPlayingTrack(true))}
      >
        <div className="w-full rounded bg-blue-600/60 px-3 py-2 shadow backdrop-blur-lg">
          <PlayerTrack />
        </div>
      </div>
      <div className="relative z-10 col-start-1 col-end-[-1] hidden items-center justify-between gap-4 rounded-lg bg-white/50 px-5 py-2 text-black shadow-lg backdrop-blur-md md:flex dark:bg-black/50 dark:text-white">
        <PlayerTrack />
        <PlaybackController />
        <PlayerMenu />
      </div>
    </>
  );
}

export default Player;
