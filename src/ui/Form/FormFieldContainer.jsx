function FormFieldContainer({ title, children }) {
  return (
    <fieldset className="rounded border-2 px-2 pb-2 pt-1">
      <legend className="text-sm font-medium text-blue-600">{title}</legend>
      {children}
    </fieldset>
  );
}

export default FormFieldContainer;
