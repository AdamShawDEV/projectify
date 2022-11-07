import styles from "./modules/TaskList.module.css";
import Task from "./Task";

function TaskList({ tasks, project, handleUpdateTask, people }) {
  return (
    <>
      <div className={styles.taskContainer}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            project={project}
            handleUpdateTask={handleUpdateTask}
            people={people}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
