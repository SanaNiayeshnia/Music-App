import FormButton from "../../ui/Form/FormButton";
import ImageInput from "../../ui/Form/ImageInput";
import TextInput from "../../ui/Form/TextInput";
import SwitchInput from "../../ui/Form/SwitchInput";

function CreateNewPlaylistForm({ setIsModalOpen }) {
  return (
    <form className="flex h-full w-full flex-col gap-3 p-2 md:flex-row">
      <div>
        <ImageInput title="Image Cover" id="cover" />
      </div>
      <div className="flex flex-grow flex-col justify-between gap-3">
        <TextInput title="Name" id="name" />
        <SwitchInput title="Visibility" label="Public" id="visibility" />

        <div className="flex justify-end gap-3">
          <FormButton
            type="secondary"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
            }}
          >
            Cancel
          </FormButton>
          <FormButton type="primary">Save</FormButton>
        </div>
      </div>
    </form>
  );
}

export default CreateNewPlaylistForm;
