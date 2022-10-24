import { delay } from "./apiUtils";
import { projects } from "../mockData";
import { nanoid } from "@reduxjs/toolkit";

async function getProjects() {
  await delay(2000);
  // api call goes here
  return Promise.resolve(projects);
}

async function saveProject(project) {
  // send to server here
  const revievedProject = project.id
    ? project
    : {
        ...project,
        id: nanoid(),
      };
  return Promise.resolve(revievedProject);
}

export { getProjects, saveProject };
