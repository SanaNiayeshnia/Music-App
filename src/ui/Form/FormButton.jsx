function FormButton({ children, type, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type === "primary" ? "submit" : "button"}
      className={`flex items-center gap-1 rounded-full ${type === "primary" && "bg-blue-600 text-white"} ${type === "secondary" && "bg-gray-300"} px-3 py-2`}
    >
      {children}
    </button>
  );
}

export default FormButton;
