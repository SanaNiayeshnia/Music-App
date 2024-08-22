import { APP_NAME } from "../utilities/constants";

function Icon({ className }) {
  return (
    <img className={`${className} h-8 w-8`} src="/icon.png" alt={APP_NAME} />
  );
}

export default Icon;
