import { delay } from "./apiUtils";
import { tasks } from "../mockData";

async function getTasks() {
  await delay(2000);

  return tasks;
}

export { getTasks };
