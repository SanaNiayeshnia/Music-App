import { TbMoodSad } from "react-icons/tb";

function ErrorFallBack({ error, resetErrorBoundary }) {
  return (
    <div className="grid h-screen w-full place-items-center">
      <div className="rounded-md bg-white/50 px-3 py-3 text-center backdrop-blur-sm">
        <p className="flex items-center gap-1 text-black dark:text-white">
          It seems like something went wrong in our end!
          <TbMoodSad className="h-6 w-6 text-black duration-100 dark:text-white" />
        </p>
        <p className="text-blue-600">Error: "{error?.message}"</p>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => window.location.replace("/")}
            className="mt-2 rounded-full bg-blue-600 px-3 py-1 text-white transition-all duration-300 hover:px-5"
          >
            Go Home
          </button>

          <button
            onClick={resetErrorBoundary}
            className="mt-2 rounded-full bg-white px-3 py-1 text-blue-600 transition-all duration-300 hover:px-5"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallBack;
