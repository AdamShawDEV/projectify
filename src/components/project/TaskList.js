import styles from "./modules/TaskList.module.css";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <>
      <div className={styles.taskContainer}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}

export default TaskList;
