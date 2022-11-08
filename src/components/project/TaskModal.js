import styles from "./modules/TaskModal.module.css";
import { useState } from "react";
import Modal from "../common/Modal";
import { HiDotsHorizontal } from "react-icons/hi";
import Button from "../common/Button";
import InputText from "../common/InputText";
import Menu from "../common/Menu";
import MenuItem from "../common/MenuItem";
import MessageList from "./MessageList";
import { useUser } from "../common/useUserContext";
import { nanoid } from "@reduxjs/toolkit";

function TaskModal({
  isOpen,
  handleClose,
  handleUpdateTask,
  enterEditMode,
  task,
  taskCard,
  people,
}) {
  const [displayOptionsMenu, setDisplayOptionsMenu] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const { userId } = useUser();

  function handleStatusButton(event) {
    const { id } = event.target;

    handleUpdateTask({
      ...task,
      status: id,
    });
  }

  function handleSendButton() {
    if (messageInput) {
      handleUpdateTask({
        ...task,
        messages: [
          ...task.messages,
          { id: nanoid(), content: messageInput, user: userId },
        ],
      });
      setMessageInput("");
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => {
        handleClose();
        setDisplayOptionsMenu(false);
      }}
    >
      <div className={styles.optionsMenu}>
        <div onClick={() => setDisplayOptionsMenu((current) => !current)}>
          <HiDotsHorizontal />
        </div>
        {displayOptionsMenu && (
          <Menu side="left">
            <MenuItem
              onClick={() => {
                enterEditMode();
                setDisplayOptionsMenu(false);
              }}
            >
              <span>edit</span>
            </MenuItem>
          </Menu>
        )}
      </div>
      <h3>Set Status:</h3>
      <div className={styles.buttonBox}>
        <Button
          id="pending"
          onClick={(event) => handleStatusButton(event)}
          style={{ backgroundColor: "#e84c3dff" }}
        >
          pending
        </Button>
        <Button
          id="active"
          onClick={(event) => handleStatusButton(event)}
          style={{ backgroundColor: "#fddd0eff" }}
        >
          active
        </Button>
        <Button
          id="completed"
          onClick={(event) => handleStatusButton(event)}
          style={{ backgroundColor: "#2fcc71ff" }}
        >
          completed
        </Button>
      </div>
      {taskCard}
      <MessageList messages={task.messages} people={people} userId={userId} />
      <div>
        <InputText
          value={messageInput}
          onChange={(event) => setMessageInput(event.target.value)}
          disabled={!userId}
        />
        <Button
          onClick={handleSendButton}
          disabled={messageInput === "" || !userId}
        >
          send
        </Button>
      </div>
    </Modal>
  );
}

export default TaskModal;
