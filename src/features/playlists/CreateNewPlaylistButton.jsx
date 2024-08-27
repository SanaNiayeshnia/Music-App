import { Tooltip } from "@mui/material";
import { TbPlus } from "react-icons/tb";
import CreateNewPlaylistForm from "./CreateNewPlaylistForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../ui/Modal";

function CreateNewPlaylistButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isPlayingTrackbarOpen } = useSelector((store) => store.playback);

  return (
    <div>
      <Tooltip title="Create a new playlist">
        <div>
          <TbPlus
            onClick={() => setIsModalOpen(true)}
            className={`${isPlayingTrackbarOpen && "md:hidden"} min-h-7 min-w-7 cursor-pointer rounded-full p-1 text-black hover:bg-white/40 hover:shadow lg:inline-block dark:text-white dark:hover:bg-black/40`}
          />
        </div>
      </Tooltip>
      <Modal
        title="Create a new playlist"
        isOpen={isModalOpen}
        closeHandler={() => setIsModalOpen(false)}
        isForm
      >
        <CreateNewPlaylistForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
}

export default CreateNewPlaylistButton;
