import FormFieldContainer from "./FormFieldContainer";

function TextInput({ title, id, register, placeholder }) {
  return (
    <FormFieldContainer title={title}>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full focus:outline-0 active:outline-0"
        {...register(id, {
          required: "You should choose a name first!",
        })}
      />
    </FormFieldContainer>
  );
}

export default TextInput;
