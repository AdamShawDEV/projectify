import styles from "./modules/Task.module.css";

function Task({ task }) {
  return (
    <div key={task.id} className={styles.task}>
      <div
        style={{ backgroundColor: task.color }}
        className={styles.taskAccent}
      ></div>
      <span>{task.title}</span>
    </div>
  );
}

export default Task;
