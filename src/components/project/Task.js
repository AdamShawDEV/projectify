import { useState } from "react";
import styles from "./modules/Task.module.css";
import Button from "../common/Button";
import { BiMessageSquareDetail } from "react-icons/bi";

function Task({ task }) {
  const [displayButtons, setDisplayButtons] = useState(false);

  return (
    <div
      key={task.id}
      className={styles.task}
      onClick={() => setDisplayButtons((current) => !current)}
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
      {displayButtons && (
        <div className={styles.buttonBox}>
          <h3>Set Status:</h3>
          <Button style={{ backgroundColor: "#e84c3dff" }}>pending</Button>
          <Button style={{ backgroundColor: "#fddd0eff" }}>in-progress</Button>
          <Button style={{ backgroundColor: "#2fcc71ff" }}>complete</Button>
        </div>
      )}
    </div>
  );
}

export default Task;
