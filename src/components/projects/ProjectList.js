import styles from "./modules/ProjectList.module.css";
import { useNavigate } from "react-router-dom";

function ProjectList({ projects, tasks }) {
  const navigate = useNavigate();

  return (
    <div className={styles.listContainer}>
      {projects.map((project) => (
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
            <h3>Pending Tasks:</h3>
            <div className={styles.taskContainer}>
              {tasks[project.id]
                ? tasks[project.id].map((task) => (
                    <div key={task.id} className={styles.task}>
                      <div
                        style={{ backgroundColor: task.color }}
                        className={styles.taskAccent}
                      ></div>
                      <span>{task.title}</span>
                    </div>
                  ))
                : "No pending tasks."}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
