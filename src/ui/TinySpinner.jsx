import { TbLoader } from "react-icons/tb";

function TinySpinner({ className }) {
  return (
    <TbLoader
      className={`${className} min-h-6 min-w-6 animate-spin text-blue-600 duration-100`}
    />
  );
}

export default TinySpinner;
