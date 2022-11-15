import styles from "./modules/TaskModal.module.css";
import { useRef, useState } from "react";
import Modal from "../common/Modal";
import { HiDotsHorizontal } from "react-icons/hi";
import Button from "../common/Button";
import InputText from "../common/InputText";
import Menu from "../common/Menu";
import MenuItem from "../common/MenuItem";
import MessageList from "./MessageList";
import { useUser } from "../common/useUserContext";
import { nanoid } from "@reduxjs/toolkit";
import { TASK_STATUS } from "../../consts";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function TaskModal({
  handleClose,
  handleUpdateTask,
  enterEditMode,
  task,
  taskCard,
  people,
}) {
  const [displayOptionsMenu, setDisplayOptionsMenu] = useState(false);
  const [displayOwnerSelect, setDisplayOwnerSelect] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const { userId } = useUser();
  const statusSelectedRef = useRef(null);
  const navigate = useNavigate();

  function handleStatusButton(event) {
    const { id } = event.target;

    if (
      (id === TASK_STATUS.ACTIVE || id === TASK_STATUS.COMPLETED) &&
      !task.owner
    ) {
      setDisplayOwnerSelect(true);
      statusSelectedRef.current = id;
    } else if (id === TASK_STATUS.PENDING) {
      handleUpdateTask({
        ...task,
        status: id,
        owner: null,
      });
    } else {
      handleUpdateTask({
        ...task,
        status: id,
      });
    }
  }

  function handleOwnerSelected(e) {
    const { value: selectedOwner } = e.target;

    if (selectedOwner === "add new") navigate("/people");

    handleUpdateTask({
      ...task,
      status: statusSelectedRef.current,
      owner: selectedOwner,
    });

    handleClose();
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
          <Menu side="left" closeMenu={() => setDisplayOptionsMenu(false)}>
            <MenuItem onClick={() => enterEditMode()}>
              <span>edit</span>
            </MenuItem>
          </Menu>
        )}
      </div>
      <h3>Set Status:</h3>
      <div className={styles.buttonBox}>
        <Button
          id={TASK_STATUS.PENDING}
          onClick={(event) => handleStatusButton(event)}
          style={{ backgroundColor: "#e84c3dff" }}
        >
          pending
        </Button>
        <Button
          id={TASK_STATUS.ACTIVE}
          onClick={(event) => handleStatusButton(event)}
          style={{ backgroundColor: "#fddd0eff" }}
        >
          active
        </Button>
        <Button
          id={TASK_STATUS.COMPLETED}
          onClick={(event) => handleStatusButton(event)}
          style={{ backgroundColor: "#2fcc71ff" }}
        >
          completed
        </Button>
      </div>
      {displayOwnerSelect && (
        <>
          <h3>please select owner</h3>
          <select onChange={(e) => handleOwnerSelected(e)}>
            <option value="">select owner</option>
            {people.map((person) => (
              <option
                key={person.id}
                value={person.id}
              >{`${person.firstName} ${person.lastName}`}</option>
            ))}
            <option value="add new">add new</option>
          </select>
        </>
      )}
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

TaskModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
  enterEditMode: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  taskCard: PropTypes.object.isRequired,
  people: PropTypes.array.isRequired,
};

export default TaskModal;
