import { useNavigate } from "react-router-dom";
import { APP_NAME, CLIENT_ID, REDIRECT_URI } from "../../utilities/constants";
import { useSelector } from "react-redux";
import Logo from "../../ui/Logo";

function LoginForm() {
  const RESPONSE_TYPE = "code";
  const scope =
    "user-follow-read user-read-email user-read-private user-library-read playlist-read-private user-read-recently-played user-read-playback-state user-read-currently-playing user-library-modify user-follow-modify playlist-modify-public playlist-modify-private ugc-image-upload user-top-read";
  const navigate = useNavigate();
  const { refreshToken } = useSelector((store) => store.authentication);

  function handleLoginClick() {
    //check if the user has a refresh token, use it to get a new access token, otherwise go to spotify login page to get a code
    if (refreshToken) navigate("/");
    else
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${scope}&show_dialog=true`;
  }

  return (
    <div className="max-w-96 space-y-8 rounded-lg bg-white/50 px-8 py-5 text-center shadow-md md:max-w-[650px] md:space-y-10 md:p-10 lg:max-w-[750px] dark:bg-black/50">
      <p className="flex flex-col justify-center text-center text-3xl font-bold text-black md:mb-10 md:flex-row md:gap-2 dark:text-white">
        <span>Welcome to</span>
        <span>{APP_NAME}!</span>
      </p>
      <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
        <Logo />
        <div className="space-y-5 text-center">
          <p className="text-justify text-black dark:text-white">
            Welcome to your ultimate music discovery app, powered by Spotify!
            Explore millions of playlists, albums, artists, and tracks—all in
            one place. Whether you're here to find new favorites or enjoy your
            go-to hits, we've got you covered. Premium users can dive even
            deeper by streaming songs directly within the app. Ready to begin
            your musical journey? Log in with your Spotify account to get
            started!
          </p>
        </div>
      </div>
      <div className="space-y-3 text-center">
        <div className="text-center text-sm text-black dark:text-white">
          {refreshToken ? (
            <p>You've already logged in.</p>
          ) : (
            <p className="flex flex-col items-center">
              <span>You need to connect to</span>
              <span>your Spotify account to log in.</span>
            </p>
          )}
        </div>
        <button
          onClick={handleLoginClick}
          className="dark:hover:ring-glass-200 rounded-md bg-blue-600 px-3 py-2 text-white shadow-md hover:bg-blue-700 hover:ring hover:ring-blue-100"
        >
          {refreshToken ? "Go to the app" : "Connect"}
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
