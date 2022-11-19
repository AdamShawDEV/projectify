import styles from "./modules/Project.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectTaskByProjectId } from "../../redux/slices/taskSlice";

function Project({ project }) {
  const tasks = useSelector((state) =>
    selectTaskByProjectId(state, project.id)
  );
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

Project.propTypes = {
  project: PropTypes.object.isRequired,
  tasks: PropTypes.array,
};

export default Project;
