import { CLIENT_ID, REDIRECT_URI } from "../../utilities/constants";

function LoginForm() {
  const RESPONSE_TYPE = "code";

  return (
    <div className="flex max-w-[19rem] flex-col items-center gap-3 rounded-md bg-white p-5 shadow-md dark:bg-glass-100">
      <p className="text-center text-3xl font-bold text-gray-900 dark:text-white">
        Welcome to Music App!
      </p>
      <img src="/logo.png" alt="" className="h-52 w-52" />
      <p className="text-center text-gray-900 dark:text-white">
        You need to connect to your Spotify account to log in.
      </p>
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`}
        className="rounded-md bg-blue-600 px-3 py-2 text-white shadow-md hover:bg-blue-700 hover:ring hover:ring-blue-100 dark:hover:ring-glass-200"
      >
        Connect
      </a>
    </div>
  );
}

export default LoginForm;
