import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/modules/PageNotFound";
import ProjectsPage from "./components/projects/ProjectsPage";
import Header from "./components/Header";
import ProjectPage from "./components/project/ProjectPage";

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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
