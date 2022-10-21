import { delay } from "./apiUtils";
import { projects } from "../mockData";

async function getProjects() {
  await delay(2000);

  return projects;
}

export { getProjects };
