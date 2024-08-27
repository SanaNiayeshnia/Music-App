import { createPortal } from "react-dom";
import { TbX } from "react-icons/tb";

function Modal({
  isOpen = false,
  closeHandler,
  title = "",
  isForm = false,
  children,
}) {
  return createPortal(
    <div
      className={`absolute ${!isOpen ? "-z-50 opacity-0" : "z-50 opacity-100"} inset-0 grid place-items-center backdrop-blur backdrop-brightness-50 transition-all duration-300`}
    >
      <div
        className={`absolute ${isOpen ? "top-1/2" : "-top-1/2"} left-1/2 ${isForm ? "w-80 md:w-[30rem]" : "w-80 md:w-96"} -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300`}
      >
        <div className="flex items-center justify-between gap-3 bg-blue-600 p-3">
          <p className="text-lg font-semibold text-white">{title}</p>
          <TbX
            className="h-6 w-6 cursor-pointer text-white transition-all hover:scale-105"
            onClick={closeHandler}
          />
        </div>
        <div className="grid min-h-36 place-items-center px-3 py-2">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
