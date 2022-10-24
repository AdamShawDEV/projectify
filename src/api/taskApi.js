import { delay } from "./apiUtils";
import { tasks } from "../mockData";

async function getTasks() {
  await delay(2000);
  // api call goes here
  return Promise.resolve(tasks);
}

export { getTasks };
