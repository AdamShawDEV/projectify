import { useState } from "react";
import styles from "./modules/Task.module.css";
import Button from "../common/Button";

function Task({ task }) {
  const [displayButtons, setDisplayButtons] = useState(false);

  return (
    <div
      key={task.id}
      className={styles.task}
      onClick={() => setDisplayButtons((current) => !current)}
    >
      <div className={styles.titleGroup}>
        <div
          style={{ backgroundColor: task.color }}
          className={styles.taskAccent}
        ></div>
        <span>{task.title}</span>
      </div>
      <div className={styles.statusContainer}>
        <div
          className={styles.status}
          style={{
            backgroundColor:
              task.status === "pending" ? "#fddd0eff" : "#2fcc71ff",
          }}
        >
          pending
        </div>
        <div
          className={styles.status}
          style={{
            backgroundColor:
              task.status === "in progress"
                ? "#fddd0eff"
                : task.status === "completed"
                ? "#2fcc71ff"
                : "#fff",
          }}
        >
          in-progress
        </div>
        <div
          className={styles.status}
          style={{
            backgroundColor: task.status === "completed" ? "#2fcc71ff" : "#fff",
          }}
        >
          complete
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
