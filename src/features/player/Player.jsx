import { useDispatch, useSelector } from "react-redux";
import PlayerTrack from "../tracks/PlayerTrack";
import PlaybackController from "./playbackController/PlaybackController";
import PlayerMenu from "./playerMenu/PlayerMenu";
import {
  changePlayerState,
  setDeviceId,
  setIsFullScreenPlayingTrack,
  setPlayer,
} from "./PlaybackSlice";
import { useEffect } from "react";
import { APP_NAME } from "../../utilities/constants";

function Player() {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((store) => store.authentication);
  useEffect(() => {
    const loadSpotifyPlayer = () => {
      if (window.Spotify) {
        const player = new window.Spotify.Player({
          name: APP_NAME,
          getOAuthToken: (cb) => cb(accessToken),
          volume: 0.5,
        });

        dispatch(setPlayer(player));

        player.addListener("ready", ({ device_id }) => {
          console.log("Ready with Device ID:", device_id);
          dispatch(setDeviceId(device_id));
        });

        player.addListener("player_state_changed", (state) => {
          if (!state) return;
          console.log(state);

          dispatch(
            changePlayerState({
              trackInfo: {
                name: state.track_window.current_track.name,
                artists: state.track_window.current_track.artists
                  .map((a) => a.name)
                  .join(", "),
                album: state.track_window.current_track.album.name,
                image: state.track_window.current_track.album.images[0]?.url,
              },
              paused: state.paused,
              position: state.position,
              duration: state.duration,
            }),
          );
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
