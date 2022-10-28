import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./modules/Task.module.css";
import Button from "../common/Button";
import { BiMessageSquareDetail } from "react-icons/bi";
import Modal from "../common/Modal";

function Task({ task, project, handleUpdateTask }) {
  const [displayNoteModal, setDisplayNoteModal] = useState(false);
  const [messageInput, setMessageInput] = useState("");

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
        messages: [...task.messages, { id: nanoid(), content: messageInput }],
      });
      setMessageInput("");
    }
  }

  const taskCard = (
    <div
      className={styles.task}
      onClick={() => setDisplayNoteModal((current) => !current)}
    >
      <div className={styles.heading}>
        <h2>{task.title}</h2>
        <div className={styles.peopleContainer}>
          {task.owner && <div className={styles.portrait}></div>}
        </div>
      </div>
      <p>{task.details}</p>
      <div className={styles.notificationArea}>
        {task.messages.length > 0 && (
          <div className={styles.notification}>
            <BiMessageSquareDetail /> {task.messages.length}{" "}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {taskCard}
      {displayNoteModal && (
        <Modal
          isOpen={displayNoteModal}
          handleClose={() => setDisplayNoteModal(false)}
        >
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
          {task.messages.map((message) => (
            <div key={message.id} className={styles.task}>
              {message.content}
            </div>
          ))}
          <div>
            <input
              className={styles.messageInput}
              type="text"
              value={messageInput}
              onChange={(event) => setMessageInput(event.target.value)}
            />
            <Button onClick={handleSendButton} disabled={messageInput === ""}>
              send
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Task;
