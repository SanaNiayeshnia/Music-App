import { TbCloudOff } from "react-icons/tb";
import Logo from "./Logo";

function OfflineNotification() {
  return (
    <div className="grid min-w-80 place-items-center space-y-5 rounded-md bg-white/50 py-7 pl-5 pr-7 backdrop-blur-md dark:bg-black/50">
      <Logo />
      <div>
        <p className="flex items-center justify-center gap-2 text-center text-lg font-medium text-black dark:text-white">
          <TbCloudOff className="h-6 w-6" /> You are offline!
        </p>
        <p className="text-center text-sm text-black dark:text-white">
          Please check your connection.
        </p>
      </div>
    </div>
  );
}

export default OfflineNotification;
