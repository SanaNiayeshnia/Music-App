import FormButton from "../../ui/Form/FormButton";
import ImageInput from "../../ui/Form/ImageInput";
import TextInput from "../../ui/Form/TextInput";
import SwitchInput from "../../ui/Form/SwitchInput";
import { useForm, useWatch } from "react-hook-form";
import useCreatePlaylist from "./hooks/useCreatePlaylist";
import { useNavigate } from "react-router-dom";
import useUpdatePlaylist from "./hooks/useUpdatePlaylist";
import TinySpinner from "../../ui/TinySpinner";
import usePlaylist from "./hooks/usePlaylist";
import useCurrentUser from "../authentication/hooks/useCurrentUser";
import toast from "react-hot-toast";

function CreateEditNewPlaylistForm({
  setIsModalOpen,
  playlistIdToEdit = null,
}) {
  const isEditSession = Boolean(playlistIdToEdit);
  const { playlist: playlistToEdit } = usePlaylist(playlistIdToEdit);
  const initialState = isEditSession
    ? {
        name: playlistToEdit?.name,
        cover: playlistToEdit?.images?.at(0)?.url,
        visibility: playlistToEdit?.public,
      }
    : { name: "", cover: null, visibility: false };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: initialState,
  });
  const watchedValues = useWatch({ control: control });
  const { isPending: isPendingCreate, createPlaylistMutate } =
    useCreatePlaylist();
  const { isPending: isPendingEdit, updatePlaylistMutate } = useUpdatePlaylist(
    playlistToEdit?.id,
  );
  const { user } = useCurrentUser();
  const navigate = useNavigate();

  function checkIfFieldsHasChanged() {
    return (
      watchedValues?.cover !== initialState.cover ||
      watchedValues?.name !== initialState.name ||
      watchedValues?.visibility !== initialState.visibility
    );
  }

  function onSubmit(data) {
    isEditSession
      ? updatePlaylistMutate(
          {
            playlistId: playlistToEdit?.id,
            name: data?.name,
            isPublic: data?.visibility,
            image: data?.cover ? data?.cover[0] : null,
          },
          {
            onSettled: () => {
              setIsModalOpen(false);
              reset();
            },
          },
        )
      : createPlaylistMutate(
          {
            userId: user?.id,
            name: data?.name,
            isPublic: data?.visibility,
            image: data?.cover ? data?.cover[0] : null,
          },
          {
            onSuccess: () => {
              toast(`Playlist ${data?.name} was created`);
              data?.cover &&
                toast(
                  "It may takes a few moments for the cover image to be uploaded",
                  { duration: 5000 },
                );
            },
            onSettled: (createData) => {
              setIsModalOpen(false);
              navigate(`/playlist/${createData?.id}`);
              reset();
            },
          },
        );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col gap-3 p-2 md:flex-row"
    >
      <div>
        <ImageInput
          title="Image Cover"
          id="cover"
          register={register}
          watchedValue={watchedValues?.cover}
        />
      </div>
      <div className="flex flex-grow flex-col justify-between gap-3">
        <div className="space-y-1">
          <TextInput
            title="Name"
            id="name"
            register={register}
            placeholder="playlist name"
          />
          <p className="text-center text-sm text-red-500">
            {errors?.name?.message}
          </p>
        </div>

        <SwitchInput
          title="Visibility"
          label="Public"
          id="visibility"
          register={register}
          watchedValue={watchedValues?.visibility}
        />
        <div className="flex justify-end gap-3">
          <FormButton
            type="secondary"
            onClick={(e) => {
              e.preventDefault();
              reset();
              setIsModalOpen(false);
            }}
          >
            Cancel
          </FormButton>
          <FormButton disabled={!checkIfFieldsHasChanged()} type="primary">
            {(isPendingCreate || isPendingEdit) && (
              <TinySpinner className="text-white" />
            )}{" "}
            Save
          </FormButton>
        </div>
      </div>
    </form>
  );
}

export default CreateEditNewPlaylistForm;
