import styles from "./modules/ProjectList.module.css";
import Project from "./Project";
import PropTypes from "prop-types";

function ProjectList({ projects }) {
  return (
    <div className={styles.listContainer}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
