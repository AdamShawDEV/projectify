import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  loadProjects,
  addProject,
  updateProject,
  selectProjectById,
  selectProjectStatus,
} from "../../redux/slices/projectSlice";

const emptyProject = {
  title: "",
  details: "",
  accentColor: "",
};

function ManageProjectPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const project = useSelector((state) =>
    projectId ? selectProjectById(state, projectId) : emptyProject
  );
  const projectStatus = useSelector(selectProjectStatus);
  const [projectData, setProjectData] = useState(emptyProject);
  const [saveUpdateStatus, setSaveUpdateStatus] = useState("idle");

  useEffect(() => {
    if (projectStatus === "idle") dispatch(loadProjects());
    if (projectId && projectStatus === "succeeded") setProjectData(project);
  }, [dispatch, projectStatus, projectId, project]);

  console.log(project);

  function handleChange(event) {
    const { id, value } = event.target;

    setProjectData((current) => ({ ...current, [id]: value }));
  }

  const canSubmit =
    projectData.title && projectData.details && saveUpdateStatus === "idle";

  async function handleSubmit(event) {
    event.preventDefault();

    if (canSubmit) {
      try {
        setSaveUpdateStatus("pending");
        if (projectData.id) {
          await dispatch(updateProject(projectData)).unwrap();
        } else {
          await dispatch(addProject(projectData)).unwrap();
        }
      } catch (error) {
        throw error;
      } finally {
        setSaveUpdateStatus("idle");
        navigate("/projects");
      }
    }
  }

  if (projectId && projectStatus === "loading") return "loading...";

  return (
    <>
      <h1>{projectId ? "EditProject" : "Create Project"}</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={projectData.title}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="details">Details</label>
        <input
          type="text"
          name="details"
          id="details"
          value={projectData.details}
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default ManageProjectPage;
