import { RiPlayFill } from "react-icons/ri";

function PlayButton({ className }) {
  return (
    <div
      className={`${className} min-h-10 min-w-10 rounded-full bg-blue-600 hover:scale-105`}
    >
      <RiPlayFill
        className={`h-full w-full cursor-pointer p-2 text-white dark:text-black`}
      />
    </div>
  );
}

export default PlayButton;
