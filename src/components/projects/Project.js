import styles from "./modules/Project.module.css";
import { useNavigate } from "react-router-dom";

function Project({ project, tasks }) {
  const navigate = useNavigate();

  const activeTasks = tasks
    ? tasks.filter((task) => task.status === "active")
    : [];

  return (
    <div
      key={project.id}
      className={styles.projectContainer}
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div
        className={styles.titleWrapper}
        style={{
          backgroundColor: project.accentColor,
        }}
      >
        <h2>{project.title}</h2>
      </div>
      <span>{project.details}</span>
      <div>
        <h3>Active Tasks:</h3>
        <div className={styles.taskContainer}>
          {activeTasks.length > 0
            ? activeTasks.map((task) => (
                <div key={task.id} className={styles.task}>
                  <div
                    style={{ backgroundColor: task.color }}
                    className={styles.taskAccent}
                  ></div>
                  <span>{task.title}</span>
                </div>
              ))
            : "No active tasks."}
        </div>
      </div>
    </div>
  );
}

export default Project;
