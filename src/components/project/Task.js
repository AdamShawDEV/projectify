import { useState } from "react";
import styles from "./modules/Task.module.css";
import Button from "../common/Button";
import { BiMessageSquareDetail } from "react-icons/bi";
import Modal from "../common/Modal";

function Task({ task, project }) {
  const [displayNoteModal, setDisplayNoteModal] = useState(false);

  return (
    <div
      key={task.id}
      className={styles.task}
      onClick={() => setDisplayNoteModal((current) => !current)}
    >
      <div className={styles.heading}>
        <h2>{task.title}</h2>
        <div className={styles.peopleContainer}>
          <div className={styles.portrait}></div>
        </div>
      </div>
      <p>{task.details}</p>
      <div className={styles.notificationArea}>
        <div className={styles.notification}>
          <BiMessageSquareDetail /> 3
        </div>
      </div>
      {displayNoteModal && (
        <Modal
          isOpen={displayNoteModal}
          handleClose={() => setDisplayNoteModal(false)}
        >
          <div className={styles.buttonBox}>
            <h3>Set Status:</h3>
            <Button style={{ backgroundColor: "#e84c3dff" }}>pending</Button>
            <Button style={{ backgroundColor: "#fddd0eff" }}>
              in-progress
            </Button>
            <Button style={{ backgroundColor: "#2fcc71ff" }}>complete</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Task;
