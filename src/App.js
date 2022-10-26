import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/common/PageNotFound";
import ProjectsPage from "./components/projects/ProjectsPage";
import Header from "./components/common/Header";
import ProjectPage from "./components/project/ProjectPage";
import ManageProjectPage from "./components/project/ManageProjectPage";

function Test() {
  return <h1>This is only a test.</h1>;
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="/addproject" element={<ManageProjectPage />} />
          <Route
            path="/editproject/:projectId"
            element={<ManageProjectPage />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
