import styles from "./modules/ProjectList.module.css";
import Project from "./Project";

function ProjectList({ projects, tasks }) {
  return (
    <div className={styles.listContainer}>
      {projects.map((project) => (
        <Project key={project.id} project={project} tasks={tasks[project.id]} />
      ))}
    </div>
  );
}

export default ProjectList;
