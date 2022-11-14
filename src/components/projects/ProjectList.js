import styles from "./modules/ProjectList.module.css";
import Project from "./Project";
import PropTypes from "prop-types";

function ProjectList({ projects, tasks }) {
  return (
    <div className={styles.listContainer}>
      {projects.map((project) => (
        <Project key={project.id} project={project} tasks={tasks[project.id]} />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
  tasks: PropTypes.object.isRequired,
};

export default ProjectList;
