function FormButton({ children, type, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full ${type === "primary" && "bg-blue-600 text-white"} ${type === "secondary" && "bg-gray-300"} px-3 py-2`}
    >
      {children}
    </button>
  );
}

export default FormButton;
