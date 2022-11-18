import styles from "./modules/TaskList.module.css";
import Task from "./Task";
import PropTypes from "prop-types";

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

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
