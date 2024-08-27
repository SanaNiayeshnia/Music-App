import { useSelector } from "react-redux";
import FormFieldContainer from "./FormFieldContainer";

function ImageInput({ title, id }) {
  const { isDarkMode } = useSelector((store) => store.global);

  return (
    <FormFieldContainer title={title}>
      <div className="group relative max-w-44">
        <div className="absolute inset-0 transition-all group-hover:backdrop-brightness-50"></div>
        <img
          src={
            isDarkMode
              ? "/images/covers/album-cover-dark.jpeg"
              : "/images/covers/album-cover-light.jpeg"
          }
          alt="playlist cover"
          className="aspect-square rounded-sm filter peer-hover:brightness-50"
        />
        <label
          htmlFor={id}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-medium text-white opacity-0 transition-all group-hover:opacity-100"
        >
          Choose photo
        </label>
        <input
          id={id}
          type="file"
          accept="image/*"
          className="peer absolute inset-0 z-10 cursor-pointer opacity-0 focus:outline-0 active:outline-0"
        />
      </div>
    </FormFieldContainer>
  );
}

export default ImageInput;
