import styles from "./modules/TaskList.module.css";
import Task from "./Task";
import PropTypes from "prop-types";

function TaskList({ tasks, handleUpdateTask, people }) {
  return (
    <>
      <div className={styles.taskContainer}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleUpdateTask={handleUpdateTask}
            people={people}
          />
        ))}
      </div>
    </>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired,
};

export default TaskList;
