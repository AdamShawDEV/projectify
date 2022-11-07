import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import styles from "./modules/Task.module.css";
import Button from "../common/Button";
import { BiMessageSquareDetail } from "react-icons/bi";
import Modal from "../common/Modal";
import InputText from "../common/InputText";
import { useUser } from "../common/useUserContext";

function Task({ task, project, handleUpdateTask, people }) {
  const [displayNoteModal, setDisplayNoteModal] = useState(false);
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
          <div className={styles.messageContainer}>
            {task.messages.map((message) => {
              const sender = people.find(
                (person) => person.id === message.user
              );

              return (
                <div
                  key={message.id}
                  className={styles.message}
                  style={
                    userId === message.user
                      ? {
                          alignSelf: "flex-end",
                          backgroundColor: "#4b4bf9ff",
                          color: "#fff",
                        }
                      : null
                  }
                >
                  <img
                    src={`${
                      sender.image ? sender.image : "/images/noimage.png"
                    }`}
                    alt="user"
                    style={
                      userId === message.user
                        ? { left: "auto", right: "0.2rem" }
                        : null
                    }
                  />
                  {message.content}
                  <div
                    className={styles.senderName}
                    style={
                      userId === message.user ? { textAlign: "right" } : null
                    }
                  >
                    {sender.firstName}
                  </div>
                </div>
              );
            })}
          </div>
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
      )}
    </>
  );
}

export default Task;
