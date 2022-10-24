import { delay } from "./apiUtils";
import { projects } from "../mockData";

async function getProjects() {
  await delay(2000);
  // api call goes here
  return Promise.resolve(projects);
}

export { getProjects };
