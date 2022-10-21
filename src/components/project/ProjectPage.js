import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import * as projectActions from "../../redux/actions/projectActions";
import * as taskActions from "../../redux/actions/taskActions";

function ProjectPageWrapper(props) {
  const { projectId } = useParams();

  return <ProjectPage projectId={projectId} {...props} />;
}

function ProjectPage({ projectId }) {
  return (
    <>
      <h1>Project</h1>
      <span>{projectId}</span>
    </>
  );
}

const mapDispatchToProps = {
  loadProjects: projectActions.loadProjects,
  loadTasks: taskActions.loadTasks,
};

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    projects: state.projects,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPageWrapper);
