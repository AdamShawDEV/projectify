import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/common/PageNotFound";
import ProjectsPage from "./components/projects/ProjectsPage";
import Header from "./components/common/Header";
import ProjectPage from "./components/project/ProjectPage";
import ManageProjectPage from "./components/project/ManageProjectPage";
import PeoplePage from "./components/people/PeoplePage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="/addproject" element={<ManageProjectPage />} />
          <Route
            path="/editproject/:projectId"
            element={<ManageProjectPage />}
          />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
