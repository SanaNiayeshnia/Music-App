import FormFieldContainer from "./FormFieldContainer";

function TextInput({ title, id }) {
  return (
    <FormFieldContainer title={title}>
      <input
        type="text"
        id={id}
        className="w-full focus:outline-0 active:outline-0"
      />
    </FormFieldContainer>
  );
}

export default TextInput;
