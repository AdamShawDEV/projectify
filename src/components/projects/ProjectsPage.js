import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as projectActions from "../../redux/actions/projectActions";
import * as taskActions from "../../redux/actions/taskActions";
import PropTypes from "prop-types";
import ProjectList from "./ProjectList";
import { usePageTitle } from "../hooks/pageTitleContext";

function ProjectsPage({ projects, tasks, loadProjects, loadTasks }) {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("Projects");
  }, []);

  useEffect(() => {
    if (projects.length === 0) {
      try {
        loadProjects();
      } catch (error) {
        throw error;
      }
    }

    if (Object.keys(tasks).length === 0) {
      try {
        loadTasks();
      } catch (error) {
        throw error;
      }
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={projects} tasks={tasks} />
    </>
  );
}

ProjectsPage.propTypes = {
  projects: PropTypes.array.isRequired,
  tasks: PropTypes.object.isRequired,
  loadProjects: PropTypes.func.isRequired,
  loadTasks: PropTypes.func.isRequired,
};

const mapDispaatchToProps = {
  loadProjects: projectActions.loadProjects,
  loadTasks: taskActions.loadTasks,
};

function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects,
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps, mapDispaatchToProps)(ProjectsPage);
